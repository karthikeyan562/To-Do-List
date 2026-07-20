const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
function addTask() {
    const task = input.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
        span.classList.add("completed");
        completeBtn.textContent = "Completed";
        completeBtn.style.backgroundColor = "green";
        completeBtn.style.color = "white";
        completeBtn.disabled = true;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
}