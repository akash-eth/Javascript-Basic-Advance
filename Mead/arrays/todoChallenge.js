let todo = [
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
    }
];

// let result = function(todoList, itemToSearch) {
//     let index = todoList.findIndex(function(item, index) {
//         return item.title === itemToSearch;
//     })
//     return todoList[index];
// }

// console.log(result(todo, 'jog'));

// delete a element by it's value !!

// let deleteTodo = function(todoList, itemToDelete) {
//     let index = todoList.findIndex(function(item, index) {
//         return item.title === itemToDelete;
//     })
//     if(index > -1) {    // to check it the match is found or not !!
//         todoList.splice(index, 1);
//     }
// }

// deleteTodo(todo, 'jog');
// console.log(todo);

// let filterTodos = function(todoList, filterOption) {
//     return todoList.filter(function(item, index) {
//         let body = item.isCompleted === false;
//         return body;
//     });
// };

let sortTodos = function(todoList) {
    todoList.sort(function(a, b) {
        if(!a.isCompleted && b.isCompleted) {
            return -1;
        }
        else if(!b.isCompleted && a.isCompleted ) {
            return 1;
        }
        else {
            return 0;
        }
    })
}

console.log(sortTodos(todo));

// console.log(filterTodos(todo, 'true'));