const TodoForm = document.querySelector("#todo-form");
const TodoInput = document.querySelector("#todo-form input");
const TodoList = document.querySelector("#todo-list");

let Todos = [];

function saveTodo() {
  localStorage.setItem("List", JSON.stringify(Todos));
}

function delateTodo(event) {
  const li = event.target.parentElement;
  Todos = Todos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  li.innerText = newTodo.text;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "X";
  TodoList.appendChild(li);
  btn.addEventListener("click", delateTodo);
}

function handleTodo(event) {
  event.preventDefault();
  const newTodo = TodoInput.value;
  const newTodoObj = { text: newTodo, id: Date.now() };
  TodoInput.value = "";
  Todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

const saveTodos = localStorage.getItem("List");

if (saveTodos !== null) {
  const parseTodo = JSON.parse(saveTodos);
  Todos = parseTodo;
  parseTodo.forEach(paintTodo);
}

TodoForm.addEventListener("submit", handleTodo);
