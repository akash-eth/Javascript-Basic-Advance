// get todo list from local storage:
let getTodoList = function() {
    let todoJSON = localStorage.getItem('todos');
    if(todoJSON !== null) {
        return JSON.parse(todoJSON);
    }
    else {
        return []
    }
}

// set todo list to local storage:
let setTodoList = function(list) {
    localStorage.setItem('todos', JSON.stringify(list));
}

// remove todo on cross button click:
let removeTodo = function(list, id) {
    let getTodoById = list.findIndex(function(item) {
        return item.id === id;
    })
    if(getTodoById > -1) {
        list.splice(getTodoById, 1);
    }
}

// toggle todos whenever checkbox changes:
let toggleTodos = function(id) {
    let findTodo = todoList.find(function(item) {
        return item.id === id;
    })
    if(findTodo !== undefined) {
        findTodo.completed = !findTodo.completed
    }
}

// generate individual note DOM:
let generateIndividualTodoDOM = function(item) {
    let todoElement = document.createElement('div');
    let textElement = document.createElement('a');
    let checkboxElement = document.createElement('input');
    let removeElement = document.createElement('button');

    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.checked = item.completed
    todoElement.appendChild(checkboxElement);
    removeElement.textContent = 'x';
    textElement.setAttribute('href', `/edit.html#${item.id}`)
    removeElement.addEventListener('click', function() {
        removeTodo(todoList, item.id);
        setTodoList(todoList);
        renderTodos(todoList, filteredText);
    })

    checkboxElement.addEventListener('change', function() {
        toggleTodos(item.id);
        setTodoList(todoList);
        renderTodos(todoList, filteredText);
    })

    textElement.innerText = item.title;
    document.querySelector("#filtered-todos").appendChild(todoElement);

    todoElement.appendChild(textElement);
    todoElement.appendChild(removeElement);
} 

// generate summary DOM for incompleted todos:
let generateSummaryDOM = function(incompleteTodos) {
    let summary = document.createElement('h3');
    summary.innerText = `You have ${incompleteTodos.length} incompleted todos`
    document.querySelector("#filtered-todos").appendChild(summary);
}

// render todos:
let renderTodos = function(todos, filteredText) {
    let filteredTodos = todos.filter(function(todo) {
        //debugger
        return todo.title.toLowerCase().includes(filteredText.searchText)
    })

    //debugger

    let incompleteTodos = filteredTodos.filter(function(item) {
        return !item.completed
    });

    //debugger

    document.querySelector("#filtered-todos").innerHTML = '';

    generateSummaryDOM(incompleteTodos);

    return filteredTodos.forEach(function(item) {
        generateIndividualTodoDOM(item)
    })
}

// hide completed todos:
let hideCompletedTodos = function(list) {
    let filterList = list.filter(function(item) {
        return !item.completed;
    })

    document.querySelector("#filtered-todos").innerHTML = '';

    generateSummaryDOM(filterList);

    filterList.forEach(function(item) {
        let showTodo = document.createElement('p');
        showTodo.innerText = item.title;
        document.querySelector("#filtered-todos").appendChild(showTodo);
    })
}