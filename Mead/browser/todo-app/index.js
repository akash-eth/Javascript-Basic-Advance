// let p = document.querySelectorAll('p');
// console.log(p);

// p.forEach(function(item) {
//     if (item.textContent.includes('The')) {
//         item.remove();
//     }
// })

let todoList = [
    {
        title: 'wake',
        author: 'unknown',
        completed: true
    },
    {
        title: '5AM',
        author: 'robin',
        completed: false
    },
    {
        title: 'health',
        author: 'warikoo',
        completed: false
    }
];

let filteredText = {
    searchText: ''
}

let renderTodos = function(todos, filteredText) {
    let filteredTodos = todos.filter(function(todo) {
        return todo.title.toLowerCase().includes(filteredText.searchText)
    })

    let incompleteTodos = filteredTodos.filter(function(item) {
        return !item.completed
    });

    document.querySelector("#filtered-todos").innerHTML = '';

    let summary = document.createElement('h3');
    summary.innerText = `You have ${incompleteTodos.length} incompleted todos`
    document.querySelector("#filtered-todos").appendChild(summary);

    return filteredTodos.forEach(function(item) {
        let output = document.createElement('p');
        output.innerText = item.title;
        document.querySelector("#filtered-todos").appendChild(output)
    })
}

renderTodos(todoList, filteredText);

document.querySelector("#add-todo").addEventListener('input', function(e) {
    filteredText.searchText = e.target.value;
    renderTodos(todoList, filteredText);
})

document.querySelector("#add-todo-form").addEventListener('submit', function(e) {
    e.preventDefault();
    let newTodo = e.target.elements.todoName.value;
    todoList.push({
        title: newTodo,
        author: 'unknown',
        completed: false
    })  
    e.target.elements.todoName.value = '';
    renderTodos(todoList, filteredText);
})

let hideCompletedTodos = function(list) {
    let filterList = list.filter(function(item) {
        return !item.completed;
    })
    document.querySelector("#filtered-todos").innerHTML = '';

    filterList.forEach(function(item) {
        let showTodo = document.createElement('p');
        showTodo.innerText = item.title;
        document.querySelector("#filtered-todos").appendChild(showTodo);
    })
}

// hideCompletedTodos(todoList)

document.querySelector("#check-todos").addEventListener('click', function(e) {
    if(e.target.checked === true) {
        hideCompletedTodos(todoList);
    }
    else {
        renderTodos(todoList, filteredText);
    }
})