import { todos } from "./main.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = {
    id: todos?.length + 1,
    task: e.target.task.value,
    check: false,
  };
  try {
    localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
    location.assign("/index.html");
  } catch (error) {
    console.error("Somethig went wrong", error);
  }
});
