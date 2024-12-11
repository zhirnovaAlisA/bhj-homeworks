const addButton = document.querySelector(".tasks__add");
console.log(addButton);
addButton.addEventListener('click', function(event) {
    const currentTitle = document.querySelector(".tasks__input");
    event.preventDefault();

    if (currentTitle.value.trim() !== "") {
        const tasksList = document.querySelector(".tasks__list");

        let newTask = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `<div class="task__title">${currentTitle.value}</div><a href="#" class="task__remove">&times;</a>`
        tasksList.appendChild(newTask);
        const deleteButton = newTask.querySelector(".task__remove");
        deleteButton.addEventListener("click", () => {
            tasksList.removeChild(newTask);
        })
        currentTitle.value = "";
    }
  });