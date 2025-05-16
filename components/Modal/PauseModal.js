import { Modal, View, Text, StyleSheet, Button } from 'react-native';

const PauseModal = ({ visible, onContinue, onGoHome }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onContinue}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Game Paused</Text>
          <Button title="Continue" onPress={onContinue} />
          <Button title="Go to Home Screen" onPress={onGoHome} />
        </View>
      </View>
    </Modal>
  );
};

export default PauseModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(45, 10, 68, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
