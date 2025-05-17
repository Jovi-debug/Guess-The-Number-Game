import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Title from '../components/UI/Title';
import PrimaryButton from '../components/UI/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame, onGoHome }) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/successBG.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      <PrimaryButton onPress={onGoHome}>Back to Home</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 300,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    fontWeight: '500',
    fontStyle: "italic",
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontWeight: 'bold',
  },
});
