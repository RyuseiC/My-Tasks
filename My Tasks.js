var taskList = document.getElementById("task-list");
var newTask = document.getElementById("new-task");
var addTaskButton = document.getElementById("add-task");
var taskIndex = 0;

function addTask() {
	var listNode = document.createElement("li");
	listNode.id = ("task-item-" + taskIndex);
	listNode.innerHTML= newTask.value;

	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = '<i class="material-icons">delete</i>';
	deleteButton.style.visibility = "hidden";
	deleteButton.id = ("delete-btn-" + taskIndex);

	deleteButton.addEventListener("click", function (event) {
		var deleteButtonID = (event.target.nodeName === "button") ? event.target.id : event.target.parentNode.id;
		var index = deleteButtonID.match(/\d+/);
		document.getElementById("task-item-"+index).remove();
	});

	listNode.onmouseenter = function () {
		deleteButton.style.visibility = "visible";
	};
	listNode.onmouseleave = function () {
		deleteButton.style.visibility = "hidden";
	};

	listNode.appendChild(deleteButton);
	taskList.appendChild(listNode);
	newTask.value = "";
	taskIndex++;
}

function addOnClick() {
	if (newTask.value.length > 0) {
		addTask();
	}
}

function addOnKeypress(event) {
	if (newTask.value.length > 0 && event.which === 13) {
		addTask();
	}
}

addTaskButton.addEventListener("click", addOnClick);
newTask.addEventListener("keypress", addOnKeypress);