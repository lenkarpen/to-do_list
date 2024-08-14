document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('taskInput');
    const taskSection = document.getElementById('tasks');
    const addButton = document.getElementById('push');

    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();

        if (taskValue === "") {
            alert("The task field is blank. Enter a task name and try again.");
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <label>
                <input type="checkbox">
                <span>${taskValue}</span>
            </label>
            <button class="delete"></button>
        `;
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const taskText = taskItem.querySelector('span');
    
        // Toggle line-through on checkbox change
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskText.classList.add('checked');
            } else {
                taskText.classList.remove('checked');
            }
        });


        taskSection.appendChild(taskItem);

        taskInput.value = '';

        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });
    });
});