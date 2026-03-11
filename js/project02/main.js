import { data } from "./data.js";

const todos = {
  continue: [],
  completed: []
}
let id = 0;
let selectedTodo = null;
const todoInput = document.querySelector("#todoInput");
const continueTodosElem = document.querySelector("#continueTodos");
const completedTodosElem = document.querySelector("#completedTodos");
const toggleBtns = document.querySelectorAll(".toggleBtn")

todoInput.addEventListener("keyup", (e) => {
  let val = todoInput.value.trim();
  if (e.key === "Enter") {
    if (val) {
      if (!selectedTodo) {
        todos.continue.push({
          id: ++id,
          title: val
        })
      } else {
        selectedTodo.title = val;
        selectedTodo = null;
      }
      todoInput.value = "";
      completedTodosRender();
      continueTodosRender();
    } else {
      alert("Empty Data!")
    }
  }
})

toggleBtns.forEach(toggleBtn => toggleBtn.addEventListener("click", () => {
  if (toggleBtn.lastElementChild.classList.contains("bi-chevron-down")) {
    toggleBtn.lastElementChild.classList.replace("bi-chevron-down", "bi-chevron-up");
    toggleBtn.nextElementSibling.classList.replace("hidden", "flex")
  } else {
    toggleBtn.lastElementChild.classList.replace("bi-chevron-up", "bi-chevron-down");
    toggleBtn.nextElementSibling.classList.replace("flex", "hidden")
  }
}))

function continueTodosRender() {
  continueTodosElem.innerHTML = ""
  todos.continue.forEach(todo => {
    continueTodosElem.innerHTML += `
        <div class="shadow-sm flex items-center gap-6 p-3 relative">
          <input type="checkbox" class="w-10 h-10" oninput="handlerChecked(this,${todo.id})">
          <p>${todo.title}</p>
          <button class="absolute top-3 right-3 cursor-pointer" onclick="editTodo('continue',${todo.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen"
              viewBox="0 0 16 16">
              <path
                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
            </svg>
          </button>
          <button class="absolute top-2 right-10 cursor-pointer" onclick="deleteTodo('continue',${todo.id})">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
  `
  })
}
function completedTodosRender() {
  completedTodosElem.innerHTML = ""
  todos.completed.forEach(todo => {
    completedTodosElem.innerHTML += `
        <div class="shadow-sm flex items-center gap-6 p-3 relative">
          <input type="checkbox" checked class="w-10 h-10" oninput="handlerChecked(this,${todo.id})">
          <p class="line-through">${todo.title}</p>
          <button class="absolute top-3 right-3 cursor-pointer" onclick="editTodo('completed',${todo.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen"
              viewBox="0 0 16 16">
              <path
                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
            </svg>
          </button>
          <button class="absolute top-2 right-10 cursor-pointer" onclick="deleteTodo('completed',${todo.id})">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
  `
  })
}

function handlerChecked(elem, id) {
  if (elem.checked) {
    const foundTodo = todos.continue.find(todo => todo.id === id);
    todos.completed.push(foundTodo);
    todos.continue = todos.continue.filter(todo => todo.id !== id);
    completedTodosRender();
    continueTodosRender();
    !(todos.continue.length) && addEmptyImage("continue")
  } else {
    const foundTodo = todos.completed.find(todo => todo.id === id);
    todos.continue.push(foundTodo);
    todos.completed = todos.completed.filter(todo => todo.id !== id);
    completedTodosRender();
    continueTodosRender();
    !(todos.completed.length) && addEmptyImage("completed")
  }
}

function editTodo(status, id) {
  const foundTodo = todos[status === "continue" ? "continue" : "completed"].find(todo => todo.id === id);
  selectedTodo = foundTodo;
  todoInput.value = foundTodo.title;
}

function deleteTodo(status, id) {
  todos[status] = todos[status === "continue" ? "continue" : "completed"].filter(todo => todo.id !== id);
  completedTodosRender();
  continueTodosRender();
  todos[status].length === 0 && addEmptyImage(status);
}



function addEmptyImage(status) {
  if (status === "continue") {
    continueTodosElem.innerHTML = `
     <img src="https://png.pngtree.com/png-vector/20250116/ourmid/pngtree-data-empty-vector-png-image_15213862.png"
          alt="" class="w-[100px] mx-auto">
    `
  } else {
    completedTodosElem.innerHTML = `
    <img src="https://png.pngtree.com/png-vector/20250116/ourmid/pngtree-data-empty-vector-png-image_15213862.png"
          alt="" class="w-[100px] mx-auto">
    `
  }
}

// keyUp,KeyPress, keyDown, input