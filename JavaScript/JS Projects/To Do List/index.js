let tasks = ['Will do Breakfast', 'I will drive', "I will marry"];

// Length ===> 3 Statically:

const taskInput = document.getElementById("taskInput");
const container = document.querySelector(".container");
let indexNumber = -1;

// Delete Task From To Do List:
const deleteHandler = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

// Edit Tasks Value:
const editHandler = (index) => {
    taskInput.value = tasks[index];
    indexNumber = index;
}

// Render Tasks on UI :
const renderTasks = () => {
    container.innerHTML = "";
    // Map
    tasks.map((value, index) => {
        container.innerHTML += `<p>${value} <button onclick="editHandler(${index})">Edit</button>
        <button onclick="deleteHandler(${index})">Delete</button></p>`;
    });
};


// Add Task Handler:
const addTaskHandler = () => {
    if (taskInput.value === "") {
        alert("Enter task!");
        return;
    }
    tasks.push(taskInput.value);
    taskInput.value = "";
    renderTasks();
}

// Submit Tasks:
const submitHandler = () => {
    if (indexNumber > -1) {
        tasks[indexNumber] = taskInput.value;
        indexNumber = -1;
        taskInput.value = "";
        renderTasks();
        return;
    }
    addTaskHandler();
};
renderTasks();
