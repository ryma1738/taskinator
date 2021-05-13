var taskToDo = document.querySelector("#task-to-do");
var addTaskButton = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var taskNameInput = documtent.querySelector("input[name='task-name']").value; 

function addTask(event) {
    event.preventDefault();

    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";

    taskToDo.appendChild(taskItemEl);
}

formEl.addEventListener("submit", addTask);