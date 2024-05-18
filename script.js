document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = taskInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="delete-button">Delete</button>
        `;

        todoList.appendChild(todoItem);
        taskInput.value = '';

        todoItem.querySelector('.delete-button').addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });
    });
});

