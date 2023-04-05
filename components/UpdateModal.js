import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const UpdateModal = (props) => {
  const [modalInputValue, setModalInputValue] = useState(props.modalInputText);

  const modalInputValueHandler = (enteredText) => {
    setModalInputValue(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modal}>
        <Text style={styles.modalHeading}>Update Todo</Text>
        <TextInput
          style={styles.input}
          value={modalInputValue}
          onChangeText={modalInputValueHandler}
        />
        <View style={styles.btnGroup}>
          <Button title="Cancel" color="#C53030" onPress={props.hideModal} />
          <Button title="Update" color="#6B46C1" onPress={() => props.updateTodo(props.id, modalInputValue)} />
        </View>
      </View>
    </Modal>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#322659",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#B794F4",
    marginBottom: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: "white",
    fontSize: 19,
  },
  modalHeading: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
