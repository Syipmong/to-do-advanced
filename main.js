const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const todoText = todoInput.value;

    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = '';
});







