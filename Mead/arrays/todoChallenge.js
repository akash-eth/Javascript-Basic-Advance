let todo = [
    {
        title: 'wake up',
        status: 'completed'
    },
    {
        title: 'jog',
        status: 'incomplete'
    },
    {
        title: 'office',
        status: 'complete'
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

let deleteTodo = function(todoList, itemToDelete) {
    let index = todoList.findIndex(function(item, index) {
        return item.title === itemToDelete;
    })
    if(index > -1) {    // to check it the match is found or not !!
        todoList.splice(index, 1);
    }
}

deleteTodo(todo, 'jog');
console.log(todo);