import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/UI/CustomButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.root}>
      <Text style={styles.title}>🎉 Congrats!</Text>
      <Text style={styles.result}>
        You guessed {userNumber} in {roundsNumber} tries!
      </Text>
      <CustomButton onPress={onStartNewGame}>Start New Game</CustomButton>
    </LinearGradient>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 30, color: 'white', marginBottom: 20 },
  result: { fontSize: 18, color: 'white', marginBottom: 20 },
});
