import { Button, StyleSheet, Text, View } from "react-native";

const Todo = (props) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>{props.text}</Text>
      <View style={styles.btnGroup}>
        <Button onPress={() => props.showModal(props.text, props.id)} color="#B794F4" title="Edit" />
        <Button onPress={() => props.deleteTodo(props.id)} color="#805AD5" title="Delete" />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#553C9A",
    marginBottom: 10,
    padding: 10,
  },
  todoText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent:"center",
    gap: 10,
  }
});
