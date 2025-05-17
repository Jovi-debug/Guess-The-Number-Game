import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Colors from '../constants/colors';

function HomeScreen({ onStartGame }) {
  return (
    <View style={styles.rootContainer}>
      {/* Title fixed at top */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess My Number!</Text>
      </View>

      {/* Center content */}
      <View style={styles.centerContent}>
        <Text style={styles.subtitle}>Ready to play?</Text>
        <PrimaryButton onPress={onStartGame} style={styles.button}>
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.background,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: '400',
    backgroundColor: Colors.accent500,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});
