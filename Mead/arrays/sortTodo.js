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
        completed: true
    }
];

let sortTodo = function(listName) {
    let startSort = listName.sort(function(a, b) {
        if(a.title < b.title) {
            return -1
        }
        else if(b.title < a.title) {
            return 1
        }
        else {
            return 0
        }
    })

    return startSort;
}

// let doSorting = sortTodo(todoList);
// console.log(doSorting);

// sorting based on completed todos:

let sortCompletedTodos = function(listName) {
    let startSort = listName.sort(function(a, b) {
        if(!a.completed) {
            return -1;
        }
        else if(b.completed) {
            return 1;
        }
        else {
            return 0;
        }
    }) 
    return startSort;
};

let sortedTodo = sortCompletedTodos(todoList);
console.log(sortedTodo);
