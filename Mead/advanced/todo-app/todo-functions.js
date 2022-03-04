// 'use strict': this is a way to activate js in strict mode
'use strict'


let produceData = () => {
    data = '121212121'
}
produceData()
console.log(data);

// get todo list from local storage:
let getTodoList = () => {
    let todoJSON = localStorage.getItem('todos');
    // if(todoJSON !== null) {
    //     return JSON.parse(todoJSON);
    // }
    // else {
    //     return []
    // }
    try {
        return todoJSON ? JSON.parse(todoJSON) : [];
    } catch (e) {
        return []
    }
}

// set todo list to local storage:
let setTodoList = (list) => {
    localStorage.setItem('todos', JSON.stringify(list));
}

// remove todo on cross button click:
let removeTodo = (list, id) => {
    let getTodoById = list.findIndex((item) => item.id === id)
    if(getTodoById > -1) {
        list.splice(getTodoById, 1);
    }
}

// toggle todos whenever checkbox changes:
let toggleTodos = (id) => {
    let findTodo = todoList.find((item) => {
        return item.id === id;
    })
    if(!findTodo) {
        findTodo.completed = !findTodo.completed
    }
}

// generate individual note DOM:
let generateIndividualTodoDOM = (item) => {
    let todoElement = document.createElement('div');
    let textElement = document.createElement('a');
    let checkboxElement = document.createElement('input');
    let removeElement = document.createElement('button');

    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.checked = item.completed
    todoElement.appendChild(checkboxElement);
    removeElement.textContent = 'x';
    textElement.setAttribute('href', `/edit.html#${item.id}`)
    removeElement.addEventListener('click', () => {
        removeTodo(todoList, item.id);
        setTodoList(todoList);
        renderTodos(todoList, filteredText);
    })

    checkboxElement.addEventListener('change', () => {
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
let generateSummaryDOM = (incompleteTodos) => {
    let summary = document.createElement('h3');
    summary.innerText = `You have ${incompleteTodos.length} incompleted todos`
    document.querySelector("#filtered-todos").appendChild(summary);
}

// render todos:
let renderTodos = function(todos, filteredText) {
    let filteredTodos = todos.filter((todo) => {
        //debugger
        return todo.title.toLowerCase().includes(filteredText.searchText)
    })

    //debugger

    let incompleteTodos = filteredTodos.filter((item) => {
        return !item.completed
    });

    //debugger

    document.querySelector("#filtered-todos").innerHTML = '';

    generateSummaryDOM(incompleteTodos);

    return filteredTodos.forEach((item) => {
        generateIndividualTodoDOM(item)
    })
}

// hide completed todos:
let hideCompletedTodos = (list) => {
    let filterList = list.filter((item) => !item.completed)

    document.querySelector("#filtered-todos").innerHTML = '';

    generateSummaryDOM(filterList);

    filterList.forEach((item) => {
        let showTodo = document.createElement('p');
        showTodo.innerText = item.title;
        document.querySelector("#filtered-todos").appendChild(showTodo);
    })
}