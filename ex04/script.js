const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCountElement = document.getElementById("task-count");


let totalTasks = 0;


function updateTaskCount() {
    taskCountElement.textContent = totalTasks;
}


function addTask() {
    const taskText = taskInput.value.trim();

  
    if (taskText === "") {
        return;
    }

  
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText; 

 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

  
    li.addEventListener("click", function (event) {
       
        if (event.target !== deleteBtn) {
            li.classList.toggle("completed");
        }
    });

   
    deleteBtn.addEventListener("click", function () {
        li.remove(); 
        totalTasks--;
        updateTaskCount();
    });

    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    
    totalTasks++;
    updateTaskCount();
    taskInput.value = "";
}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});