var tasksArray = [];

document.addEventListener("DOMContentLoaded", function () {
  let taskInput = document.getElementById("input");
  let taskList = document.getElementById("tasks-list");
  let addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function () {
    addTask(taskInput, taskList);
  });

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput, taskList);
    }
  });
});

function addTask(taskInput, taskList) {
  let taskObject = {
    task: taskInput.value,
    completed: false,
  };
  tasksArray.push(taskObject);
  // create new task
  let [checkBox, li, eraseButton] = createTask(taskObject);
  // add task to list
  taskList.appendChild(li).appendChild(checkBox);
  li.appendChild(eraseButton);

  input.value = "";
  displayBottomInfo();
}

function createTask(taskObject) {
  let li = document.createElement("li");
  let checkBox = document.createElement("input");

  let eraseButton = document.createElement("img");
  eraseButton.src = "./images/erase.png";
  eraseButton.setAttribute("id", "erase-button");
  eraseButton.addEventListener("click", function () {
    removeTask(taskObject, li);
  });

  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", function () {
    toggleTaskCompleted(taskObject, li);
  });
  li.innerHTML = taskObject.task;
  return [checkBox, li, eraseButton];
}

function toggleTaskCompleted(task, li) {
  task.completed = !task.completed;
  if (task.completed) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }
  displayBottomInfo();
}

function removeTask(task, li) {
  let index = tasksArray.indexOf(task);
  if (index !== -1) {
    tasksArray.splice(index, 1);
  }
  li.parentNode.removeChild(li);
  displayBottomInfo();
}

function displayBottomInfo() {
  let completedTasks = tasksArray.filter((task) => task.completed).length;
  let remainingTasks = tasksArray.length - completedTasks;
  document.querySelector(
    ".remaining-tasks"
  ).innerHTML = `${remainingTasks} tasks left`;
  document.querySelector(
    ".completed-tasks"
  ).innerHTML = `${completedTasks} tasks completed`;
}
