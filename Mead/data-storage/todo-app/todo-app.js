let todoList = getTodoList();
let now = moment().valueOf();
let filteredText = {
    searchText: ''
}

renderTodos(todoList, filteredText);

document.querySelector("#filter-todos").addEventListener('input', function(e) {
    filteredText.searchText = e.target.value;
    console.log(filteredText);
    renderTodos(todoList, filteredText);
})

document.querySelector("#add-todo-form").addEventListener('submit', function(e) {
    e.preventDefault();
    let newTodo = e.target.elements.todoName.value;
    let todoId = uuidv4();
    todoList.push({
        id: todoId,
        title: newTodo,
        author: 'unknown',
        completed: false,
        createdAt: now,
        updatedAt: now
    })
    location.assign(`/edit.html#${todoId}`)
    setTodoList(todoList);
    renderTodos(todoList, filteredText);
    e.target.elements.todoName.value = '';
})

//hideCompletedTodos(todoList)

document.querySelector("#check-todos").addEventListener('click', function(e) {
    if(e.target.checked === true) {
        hideCompletedTodos(todoList);
    }
    else {
        renderTodos(todoList, filteredText);
    }
})

window.addEventListener('storage', function(e) {
    if(e.key === 'todos') {
        todoList = JSON.parse(e.newValue);
        renderTodos(todoList, filteredText);
    }
}) 