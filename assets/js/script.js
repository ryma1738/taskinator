var taskToDo = document.querySelector("#task-to-do");
var taskInProgressEl = document.querySelector("#task-in-progress");
var taskCompletedEl = document.querySelector("#task-completed");
var formEl = document.querySelector("#task-form");
var pageContentEl = document.querySelector("#page-content");
var taskIDCounter = 0;

function taskFormHandler(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; 
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var isEdit = formEl.hasAttribute("data-task-id");
    var taskObject = {
        name: taskNameInput,
        type: taskTypeInput
    };

    if (!taskObject.name || !taskObject.type) {
        alert("Please enter a valid name and type selection for your task!")
    }
    else {
        if (isEdit) {
            var taskId = formEl.getAttribute("data-task-id");
            completeEditTask(taskNameInput, taskTypeInput, taskId);
        }
        else {
            addTask(taskObject);
        }
        
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
    taskItemEl.appendChild(taskInfoEl);
    taskItemEl.appendChild(taskActionsEl);
    taskToDo.appendChild(taskItemEl); 
    taskIDCounter++;
}

function taskButtonHandler(event) {
    var targetEl = event.target;
    if (targetEl.matches(".delete-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
    }
    else if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        editTask(taskId);
    }
}

function deleteTask(taskId){
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
}

function editTask(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    var taskType = taskSelected.querySelector("span.task-type").textContent;
    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;
    document.querySelector("#save-task").textContent = "Save Task";
    formEl.setAttribute("data-task-id", taskId);
}

function completeEditTask(taskName, taskType, taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").textContent = taskType;

    alert("Task Updated!");
    formEl.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
}

function taskStatusChangeHandler(event) {
    var taskId = event.target.getAttribute("data-task-id");
    var statusValue = event.target.value.toLowerCase();
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    if (statusValue === "to do") {
        taskToDo.appendChild(taskSelected);
    }
    else if (statusValue === "in progress") {
        taskInProgressEl.appendChild(taskSelected);
    }
    else if (statusValue === "completed") {
        taskCompletedEl.appendChild(taskSelected);
    }
}

formEl.addEventListener("submit", taskFormHandler); 
pageContentEl.addEventListener("click", taskButtonHandler);
pageContentEl.addEventListener("change", taskStatusChangeHandler);