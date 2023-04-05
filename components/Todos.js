import { FlatList, StyleSheet, View } from "react-native";
import Todo from "./Todo";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

const Todos = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInputText, setModalInputText] = useState("");
  const [todoId, setTodoId] = useState("");

  const showModal = (text, id) => {
    setModalInputText(text);
    setTodoId(id);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalInputText("");
    setModalVisible(false);
  };

  const updateTodo = (id, text) => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    });
    props.setTodos(updatedTodos);
    setModalVisible(false);
  };

  return (
    <View style={styles.todos}>
      {modalVisible && (
        <UpdateModal
          modalInputText={modalInputText}
          id={todoId}
          hideModal={hideModal}
          visible={modalVisible}
          updateTodo={updateTodo}
        />
      )}
      <FlatList
        data={props.todos}
        renderItem={(itemData) => {
          return (
            <Todo
              deleteTodo={props.deleteTodo}
              showModal={showModal}
              id={itemData.item.id}
              text={itemData.item.text}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todos: {
    marginTop: 20,
  },
});
