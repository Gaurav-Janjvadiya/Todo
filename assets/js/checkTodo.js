import { todos } from "./main.js";

const checkTodo = (id) => {
  localStorage.setItem("todos", JSON.stringify([
    ...todos.map((todo) =>
      todo.id === id ? { ...todo, check: !todo.check } : todo
    ),
  ]));
  location.reload();
};

export default checkTodo;
