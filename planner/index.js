const taskForm = document.querySelector(".form");
const newTask = document.querySelector(".form-text");
const taskBtn = document.querySelector(".form-btn");
const taskCheckbox = document.querySelector(".form-checkbox");
const taskList = document.querySelector(".task-list");

console.log(newTask.value);

//Проверить текс

//проверить срочность
function checkUrgency(checkbox, taskItem) {
  if (checkbox.checked) {
    taskItem.classList.add("task-list__item--urgent");
  } else {
    taskItem.classList.add("task-list__item");
  }
}
//создать пункт
function createTaskItem(parent, checkbox) {
  const taskItem = document.createElement("li");
  checkUrgency(checkbox, taskItem);
  parent.append(taskItem);
  return taskItem;
}
//создать инпут в задаче
function createItemCheckbox(parent) {
  const taskCheckbox = document.createElement("input");
  taskCheckbox.setAttribute("type", "checkbox");
  taskCheckbox.classList.add("task-list__checkbox");
  parent.append(taskCheckbox);
  return taskCheckbox;
}
//создать текст задачи
function createItemText(parent, text) {
  const itemText = document.createElement("p");
  itemText.classList.add("task-list__text");
  itemText.textContent = text;
  parent.append(itemText);
  return itemText;
}
//отрисовать задачу задачу
function createTask(parent, checkbox, text) {
  const newItem = createTaskItem(parent, checkbox);
  const newCheckbox = createItemCheckbox(newItem);
  const newText = createItemText(newItem, text);
  taskForm.reset();
}

function addNewTask(parent, checkbox, text) {
  const clearInputValue = text.trim();

  if (clearInputValue) {
    createTask(parent, clearInputValue, checkbox);
  } else {
    console.log("что-то надо придумать");
  }
}
taskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addNewTask(taskList, taskCheckbox, newTask.value);
});
