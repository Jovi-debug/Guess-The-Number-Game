import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../assets/components/UI/CustomButton';
import Card from '../assets/components/UI/Card';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know this is wrong.', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') setMaxBoundary(currentGuess);
    else setMinBoundary(currentGuess + 1);

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  };

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.root}>
      <Text style={styles.title}>Opponent's Guess:</Text>
      <Card style={{ alignItems: 'center' }}>
        <Text style={styles.number}>{currentGuess}</Text>
        <View style={styles.buttons}>
          <CustomButton onPress={() => nextGuessHandler('lower')}>- Lower</CustomButton>
          <CustomButton onPress={() => nextGuessHandler('higher')}>+ Higher</CustomButton>
        </View>
      </Card>
      <ScrollView style={styles.scroll}>
        {guessRounds.map((guess, index) => (
          <Text key={index} style={styles.guessItem}>
            #{guessRounds.length - index}: {guess}
          </Text>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  root: { flex: 1, padding: 24 },
  title: { fontSize: 24, color: 'white', textAlign: 'center', marginBottom: 20 },
  number: { fontSize: 48, color: '#ddb52f' },
  buttons: { flexDirection: 'row', marginTop: 20 },
  scroll: { marginTop: 20 },
  guessItem: {
    color: 'white',
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
});
