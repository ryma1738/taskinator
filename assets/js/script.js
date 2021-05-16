var taskToDo = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");
var taskIDCounter = 0;

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

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        var statusOptionEL = document.createElement("option");
        statusOptionEL.textContent = statusChoices[i];
        statusOptionEL.setAttribute("value", statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEL);
    }
    return actionContainerEl;
}

function addTask(taskObject) {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.setAttribute("data-task-id", taskIDCounter);

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskObject.name + "</h3><span class='task-type'>" + taskObject.type + "</span>";

    var taskActionsEl = createTaskActions(taskIDCounter);
    console.log(taskActionsEl);
    taskItemEl.appendChild(taskInfoEl);
    taskItemEl.appendChild(taskActionsEl);
    taskToDo.appendChild(taskItemEl); 
    taskIDCounter++;
}

formEl.addEventListener("submit", taskFormHandler); 