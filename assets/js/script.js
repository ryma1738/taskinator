var taskToDo = document.querySelector("#task-to-do");
var addTaskButton = document.querySelector("#save-task");

function addTask() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";

    taskToDo.appendChild(taskItemEl);
}

addTaskButton.addEventListener("click", addTask);