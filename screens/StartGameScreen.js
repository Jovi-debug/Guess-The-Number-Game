import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/UI/CustomButton';
import Card from '../components/UI/Card';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetInput = () => setEnteredNumber('');

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number must be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInput },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.root}>
      <Text style={styles.title}>Pick a Number (1-99)</Text>
      <Card style={{ alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={setEnteredNumber}
        />
        <View style={styles.buttons}>
          <CustomButton onPress={resetInput}>Reset</CustomButton>
          <CustomButton onPress={confirmInput}>Confirm</CustomButton>
        </View>
      </Card>
    </LinearGradient>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, color: 'white', marginBottom: 20 },
  input: {
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    width: 60,
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  buttons: { flexDirection: 'row', marginTop: 20 },
});
