let todoList = ['walk', 'work', 'wine', 'enjoy', 'life'];

// let getTodo = function(_todoList) {
//     return _todoList;
// }

// let printTodo = getTodo(todoList);
// console.log(printTodo);

// console.log(`Your first todo is: ${printTodo[0]}`);

let delete3rdItem = todoList.splice(2, 1);
console.log(todoList);

let addItemToEnd = todoList.push('new item');
console.log(todoList);

let removeFirstElement = todoList.shift()
console.log(todoList);