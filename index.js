const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let tasks = [];


addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  tasks.push(task);
  taskInput.value = "";
  renderTasks(tasks);
});


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(tasks);
}


searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = tasks.filter(task => task.toLowerCase().includes(query));
  renderTasks(filtered);
});


function renderTasks(list) {
  taskList.innerHTML = "";
  list.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

renderTasks(tasks);
