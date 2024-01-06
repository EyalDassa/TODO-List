var tasksArray = []


document.addEventListener("DOMContentLoaded", function() {
  var taskInput = document.getElementById("input");
  var taskList = document.getElementById("tasks-list");
  var addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function() {
      addTask(taskInput, taskList);
  });

  taskInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          addTask(taskInput, taskList);
      }
  });
});


function addTask(taskInput, taskList) {
  var taskObject = {
    task: taskInput.value,
    completed: false
  }
  tasksArray.push(taskObject);
  var li = document.createElement("li");
  var checkbox = document.createElement("input"); 
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", function() {
    toggleTaskCompleted(taskObject);
});
  li.textContent = taskInput.value;
  li.appendChild(checkbox);
  taskList.appendChild(li);
  input.value = "";
}

function toggleTaskCompleted(task) {
  task.completed = !task.completed;
}