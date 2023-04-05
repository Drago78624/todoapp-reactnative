import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");

  const userInputHandler = (enteredValue) => {
    setUserInput(enteredValue);
  };

  return (
    <View>
      <View style={styles.addTodoContainer}>
        <TextInput
          placeholder="e.g Teach kashif for loop"
          style={styles.input}
          onChangeText={userInputHandler}
        />
        <Button title="Add Todo" onPress={() => props.addTodo(userInput)} color="#6B46C1" />
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  addTodoContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#B794F4",
    marginBottom: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: "white",
    fontSize: 19,
  },
  divider: {
    height: 2,
    backgroundColor: "#B794F4",
  },
});
