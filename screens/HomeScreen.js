import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/Title';
import Colors from '../constants/colors';

function HomeScreen({ onStartGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.title}>Guess My Number!</Title>
      <Text style={styles.subtitle}>Ready to play?</Text>

      <PrimaryButton onPress={onStartGame} style={styles.button}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
    color:'red'
  },
  subtitle: {
    fontSize: 22,
    color: 'goldenrod',
    marginBottom: 32,
  },
  button: {
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});
