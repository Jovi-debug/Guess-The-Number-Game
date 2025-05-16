import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const CustomButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddb52f',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  text: { color: '#4e0329', fontSize: 16, fontWeight: 'bold' },
  pressed: { opacity: 0.75 },
});
