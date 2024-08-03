// Accessing Value from the Input

const todos = [];

function populateExistingTasks() {
  const localTodos = localStorage.getItem("todos");
  if (!localTodos) {
    return;
  }

  const parsedTodos = JSON.parse(localTodos);

  if (!Array.isArray(parsedTodos)) {
    return;
  }

  parsedTodos.forEach(addNewTodo);
}

function addNewTodo(text) {
  if (!text) {
    return;
  }
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("tastDiv");

  taskDiv.innerHTML = `<div class="task">
    <div class="task-p1">
      <input type="checkbox" class="task-check" />
      <p>${text}</p>
    </div>
    <button id="delete-btn">
      <i class="ri-delete-bin-6-line"></i>
    </button>
  </div>
`;
  todos.push(text);
  localStorage.setItem("todos", JSON.stringify(todos));
  document.querySelector("#main").appendChild(taskDiv);
  document.querySelector("#new-task").value = "";
}

function taskAdder() {
  const taskInput = document.querySelector("#new-task")
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewTodo(taskInput.value);
    }
  });
}
// task delegation
function taskDeleter() {
  document.querySelector("#main").addEventListener("click", function (event) {
    if (event.target.closest("#delete-btn")) {
      let currElement = event.target.closest(".task");
      currElement.remove();
    }
  });
}
populateExistingTasks();
taskAdder();
taskDeleter();

let themeBtn = document.querySelector("#theme-btn");
let logoText = document.querySelector("#logo");
let inputIcon = document.querySelector("#plus-icon");
let inpuText = document.querySelector("#new-task");

let btnState = 0;

themeBtn.addEventListener("click", function () {
  if (btnState === 0) {
    themeBtn.style.color = "#788cde";
    logoText.style.color = "#788cde";
    inputIcon.style.color = "#788cde";
    inpuText.style.color = "#788cde";
    document.documentElement.style.setProperty("--placeholder-color", "#788cde");
    btnState++;
  } else if (btnState === 1) {
    themeBtn.style.color = "#ecbda2";
    logoText.style.color = "#ecbda2";
    inputIcon.style.color = "#ecbda2";
    inpuText.style.color = "#ecbda2";
    document.documentElement.style.setProperty("--placeholder-color", "#ecbda2");
    btnState++;
  } else if (btnState === 2) {
    themeBtn.style.color = "#e46c8c";
    logoText.style.color = "#e46c8c";
    inputIcon.style.color = "#e46c8c";
    inpuText.style.color = "#e46c8c";
    document.documentElement.style.setProperty("--placeholder-color", "#e46c8c");
    btnState++;
  } else if (btnState === 3) {
    themeBtn.style.color = "#479e98";
    logoText.style.color = "#479e98";
    inputIcon.style.color = "#479e98";
    inpuText.style.color = "#479e98";
    document.documentElement.style.setProperty("--placeholder-color", "#479e98");
    btnState = 0;
  }
});