import { todos } from "./main.js";

const deleteTodo = (id) => {
  localStorage.setItem(
    "todos",
    JSON.stringify([...todos.filter((todo) => todo.id !== id)])
  );
  location.reload();
};

export default deleteTodo;
