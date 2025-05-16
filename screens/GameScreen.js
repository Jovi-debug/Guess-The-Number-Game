import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Pressable,
} from 'react-native';
import Title from '../components/UI/Title';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/PrimaryButton';
import Card from '../components/UI/Card';
import GuessListItem from '../components/Game/GuessListItem';
import Colors from '../constants/colors';
import PauseModal from '../components/Modal/PauseModal';
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber, onGameOver, onGoHome }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  const [pauseModalVisible, setPauseModalVisible] = useState(false);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      setMaxBoundary(currentGuess);
    } else {
      setMinBoundary(currentGuess + 1);
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  function openPauseModal() {
    setPauseModalVisible(true);
  }

  function closePauseModal() {
    setPauseModalVisible(false);
  }

  function goHomeHandler() {
    setPauseModalVisible(false);
    onGoHome();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Title>Opponent's Guess</Title>
        <Pressable
          onPress={openPauseModal}
          style={({ pressed }) => pressed && { opacity: 0.5 }}
        >
          <Ionicons name="pause" size={30} color="dimgray" />
        </Pressable>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessListItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <PauseModal
        visible={pauseModalVisible}
        onClose={closePauseModal}
        onGoHome={goHomeHandler}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 20,
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
