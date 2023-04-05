import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          text: todoText,
        },
      ];
    });
  };

  const deleteTodo = (id) => {
    const fitleredTodos = todos.filter((todo) => {
      return id != todo.id;
    });
    setTodos(fitleredTodos);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeading}>Todoos !</Text>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#322659",
  },
  mainHeading: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
