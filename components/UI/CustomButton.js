import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function CustomButton({ children, onPress }) {
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

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInner: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
