// Function to add a new todo
function addTodo() {
    // Get the input value
    const newTodoInput = document.getElementById("new-todo");
    const newTodoText = newTodoInput.value;

    // Check if the input is not empty
    if (newTodoText.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${newTodoText}
            <button onclick="removeTodo(this)">Remove</button>
        `;

        // Add the list item to the todo list
        document.getElementById("todo-list").appendChild(listItem);

        // Clear the input
        newTodoInput.value = "";
    }
}

// Function to remove a todo
function removeTodo(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
