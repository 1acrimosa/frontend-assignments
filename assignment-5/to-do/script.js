document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function createTask(taskText, index) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const deleteButton = document.createElement("button");

        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed");
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        });

        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
            tasks.splice(index, 1);
            saveTasks();
        });

        li.innerText = taskText;
        li.appendChild(checkbox);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }

    // tasks.forEach(function (task, index) {
    //     createTask(task.text, index);
    //     if (task.completed) {
    //         const li = taskList.lastChild;
    //         li.classList.add("completed");
    //     }
    // });

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const index = tasks.length;
            createTask(taskText, index);
        }
    });
});
// I'm so sorry, bcs when I preload web page, all content disappearing.