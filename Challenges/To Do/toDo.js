const list = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");
const newTaskInput = document.getElementById("newTask");

function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateList() {
  const tasks = getTasksFromLocalStorage();

  list.innerHTML = "";
  newTaskInput.value = "";

  tasks.forEach((task) => {
    const newListItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", () => {
      const taskIndex = tasks.indexOf(task);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        newListItem.remove();
      }
    });
    newListItem.textContent = task;
    list.appendChild(newListItem);
    newListItem.appendChild(removeButton);
  });
}

addTaskBtn.addEventListener("click", () => {
  const tasks = getTasksFromLocalStorage();
  const newTask = newTaskInput.value;
  if (newTask !== "") {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateList();
  }
});

updateList();
