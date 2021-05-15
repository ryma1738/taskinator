var taskToDo = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");

function addTask(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; 
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    taskItemEl.appendChild(taskInfoEl);
    taskToDo.appendChild(taskItemEl);
}

formEl.addEventListener("submit", addTask); 