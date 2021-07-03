const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("todo-btn");

//
let todoItemsObj = localStorage.getItem("todoItems")
  ? JSON.parse(localStorage.getItem("todoItems"))
  : {};
localStorage.setItem("todoItems", JSON.stringify(todoItemsObj));
const todoData = JSON.parse(localStorage.getItem("todoItems"));

//Create random ids for items
function generateRandomId() {
  return `item-${Math.floor(Math.random() * 1000)}`;
}
//Render local stored todo list or just refresh
function renderTodoList() {
  Object.keys(todoData).forEach((id) => {
    addItem(todoData[id], id);
  });
}

//Add item on click
function handleAddClick() {
  let inputValue = document.getElementById("todo-input");
  if (inputValue.value) {
    //Generate random todo item id
    todoID = generateRandomId();

    //Add new todo item to todo object
    todoItemsObj[todoID] = inputValue.value;
    localStorage.setItem("todoItems", JSON.stringify(todoItemsObj));
    addItem(inputValue.value, todoID);
  } else {
    alert("Input bos olamaz");
  }
  inputValue.value = "";
}
addBtn.addEventListener("click", handleAddClick);

//Create todo items with given object
function addItem(todoText, todoId) {
  //Creating list item
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todo-item");
  todoListItem.id = todoId;
  todoListItem.addEventListener("click", itemDone);

  //Creating remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "&#10060;";
  removeBtn.addEventListener("click", removeItem);
  removeBtn.classList.add("remove-btn");

  //Creating list item text
  const todoListText = document.createElement("span");
  todoListText.textContent = todoText;
  todoListText.classList.add("todo_text");

  //Add created children into todo item
  todoListItem.append(todoListText, removeBtn);

  //Add created todo item into todo list
  todoList.appendChild(todoListItem);
}

//Delete existing todo item
function removeItem(e) {
  delete todoItemsObj[this.parentNode.id];
  localStorage.setItem("todoItems", JSON.stringify(todoItemsObj));
  todoList.removeChild(this.parentNode);
}

function createCheckMark() {
  const checkMark = document.createElement("i");
  checkMark.classList.add("todo-check-mark");
  checkMark.innerHTML = "&#10003;";

  return checkMark;
}

function itemDone() {
  const childCheckMark = document.querySelector(`#${this.id} i`);
  const itemText = document.querySelector(`#${this.id} span`);

  //Add checkmark into done item or remove it if it exists
  if (childCheckMark) {
    this.removeChild(childCheckMark);
  } else {
    this.prepend(createCheckMark());
  }
  //Add some done item styling
  this.classList.toggle("todo-item--done");

  itemText.classList.toggle("todo_text--done");
}

//Render items on first load
renderTodoList();
