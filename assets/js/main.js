import deleteTodo from "./deleteTodo.js";
import checkTodo from "./checkTodo.js";

let todos = [];
try {
  const deleteButton = document.querySelector(".delete-all-tasks");
  deleteButton.style.display = todos.length > 0 ? "inline-block" : "none";
  deleteButton.addEventListener("click", (e) => {
    localStorage.removeItem("todos");
    location.reload();
  });
} catch (error) {
  console.error("something went wrong");
}

try {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const ul = document.querySelector("ul");
  ul.innerHTML =
    todos.length > 0
      ? todos
          ?.forEach((todo) => {
            let li = document.createElement("li");
            const taskDiv = document.createElement("div");
            const taskP = document.createElement("p");
            taskP.setAttribute(
              "style",
              todo.check
                ? "text-decoration: line-through;"
                : " text-decoration: none;"
            );
            taskP.textContent = todo.task;
            taskDiv.appendChild(taskP);
            li.appendChild(taskDiv);
            const buttonDiv = document.createElement("div");
            const checkButton = document.createElement("button");
            checkButton.textContent = "Check";
            checkButton.addEventListener("click", () => checkTodo(todo.id));
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteTodo(todo.id));
            buttonDiv.appendChild(checkButton);
            buttonDiv.appendChild(deleteButton);
            li.appendChild(buttonDiv);
            ul.appendChild(li);
          })
          .join("")
      : "<p>TODOS NOT FOUND</p>";
} catch (e) {
  console.log(e);
}

export { todos };
