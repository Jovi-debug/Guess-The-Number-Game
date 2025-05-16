import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

function GuessListItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessListItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemText: {
    color: Colors.background,
    fontWeight: 'bold',
  },
});
