import { Pressable, Text, StyleSheet, View } from 'react-native';
import Colors from '../../../constants/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.buttonInner, pressed && styles.pressed]}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: { margin: 4, borderRadius: 28, overflow: 'hidden' },
  buttonInner: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: { color: 'white', textAlign: 'center' },
  pressed: { opacity: 0.75 },
});
