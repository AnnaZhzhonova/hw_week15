const taskForm = document.querySelector(".form");
const newTask = document.querySelector(".form-text");
const taskBtn = document.querySelector(".form-btn");
const taskCheckbox = document.querySelector(".form-checkbox");
const taskList = document.querySelector(".task-list");
const removeBtn = document.querySelector(".remove-btn");
const notification = document.querySelector(".notification");

//проверить срочность
function checkUrgency(checkbox, item) {
  if (checkbox.checked) {
    item.classList.add("task-list__item--urgent");
  } else {
    item.classList.add("task-list__item");
  }
}
//создать задачу
function createTaskItem(parent, checkbox) {
  const taskItem = document.createElement("li");
  checkUrgency(checkbox, taskItem);
  parent.prepend(taskItem);
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
const items = [];

//отрисовать задачу
function createTask(parent, checkbox, text) {
  const newItem = createTaskItem(parent, checkbox);
  const newCheckbox = createItemCheckbox(newItem);
  const newText = createItemText(newItem, text);
  changeStatus(newCheckbox, newText);
  items.push(newItem.textContent);
  taskForm.reset();
}

function addNewTask(parent, checkbox, text) {
  const clearInputValue = text.trim();

  if (clearInputValue) {
    createTask(parent, checkbox, clearInputValue);
  }
  notification.remove();
}
//чекбокс для таски
function changeStatus(checkbox, text) {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      text.classList.add("done");
    } else {
      text.classList.remove("done");
    }
  });
}

//работа кнопки add
taskBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addNewTask(taskList, taskCheckbox, newTask.value);
});

//функуия очистить список
function cleanList(arr, btn) {
  if (arr.length > 0) {
    btn.removeAttribute("disabled");
  }
  return btn;
}

//работа кнопки очистить список
removeBtn.addEventListener("click", () => {
  cleanList(items, removeBtn);
  taskList.innerHTML = null;
  taskList.append(notification);
});
