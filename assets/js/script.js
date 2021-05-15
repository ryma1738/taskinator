var taskToDo = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");

function taskFormHandler(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; 
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var taskObject = {
        name: taskNameInput,
        type: taskTypeInput
    };

    if (!taskObject.name || !taskObject.type) {
        alert("Please enter a valid name and type selection for your task!")
    }
    else {
        addTask(taskObject);
    }
    formEl.reset();
    
    
}

function addTask(taskObject) {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskObject.name + "</h3><span class='task-type'>" + taskObject.type + "</span>";

    taskItemEl.appendChild(taskInfoEl);
    taskToDo.appendChild(taskItemEl); 
}

formEl.addEventListener("submit", taskFormHandler); 