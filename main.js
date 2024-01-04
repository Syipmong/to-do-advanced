// Get references to the form and list elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to the form
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value from the input field
    const todoText = todoInput.value;

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    // Append the new list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
});