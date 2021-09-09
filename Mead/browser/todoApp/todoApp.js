let todoList = [
    {
        title: 'wake up',
        isCompleted: true
    },
    {
        title: 'jog',
        isCompleted: true
    },
    {
        title: 'office',
        isCompleted: false
    },
    {
        title: 'shopping',
        isCompleted: false
    }
];

// find left over todos
let leftOverTodos = function(todo) {
    return todo.filter(function(item) {
        return !item.isCompleted;
    })
}      

// show left over todos
let showLeftTodos = function() {
    let getTodos = document.createElement('h4');
    getTodos.textContent = `You are left with ${leftOverTodos(todoList).length} todos`;
    document.querySelector('body').appendChild(getTodos);
} 
showLeftTodos();

let filters = {
    searchText: '',
    hideCompleted: false
}

let renderTodo = function(todoList, filters) {
    let filtered = todoList.filter(function(item) {
        let searchText = item.title.toLowerCase().includes(filters.searchText.toLowerCase());
        let hideText =  !filters.hideCompleted || item.isCompleted
        return searchText && hideText
        // return item.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // filtered = filtered.filter(function(item) {
    //     // if(filters.hideCompleted) {
    //     //     return !item.isCompleted
    //     // }
    //     // else {
    //     //     return true
    //     // }
    //     // or
    //     return !filters.hideCompleted || item.isCompleted
    // })

    document.querySelector('#output-search').innerHTML = '';

    filtered.forEach(function(item) {
        let element = document.createElement('p');
        element.textContent = item.title;
        document.querySelector('#output-search').appendChild(element);
    })
}

renderTodo(todoList, filters);

document.querySelector('#search-todo').addEventListener('input', function(event) {
    filters.searchText = event.target.value;
    renderTodo(todoList, filters);
})

document.querySelector('#todo-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let newTodo = {
        title: event.target.elements.todoTitle.value,
        isCompleted: false
    }
    todoList.push(newTodo)
    renderTodo(todoList, filters);
    event.target.elements.todoTitle.value = '';
})

document.querySelector('#hide-content').addEventListener('change', function(event) {
    filters.hideCompleted = event.target.checked;
    renderTodo(todoList, filters);
})