let currentTime = moment().valueOf();
let getTodoHash = location.hash.substring(1);
let getTodo = getTodoList();
let todo = getTodo.find(function(item) {
    return item.id === getTodoHash
});

console.log(todo);

let titleElement = document.querySelector('#edit-title');
let authorElement = document.querySelector('#edit-author');
let removeElement = document.querySelector('#remove-todo');
let lastEditedElement = document.querySelector('#last-edited');

titleElement.value = todo.title
authorElement.value = todo.author

lastEditedElement.textContent = `last updated at: ${moment(todo.updatedAt).fromNow()}`

let setTitle = function() {
    titleElement.addEventListener('input', function(e) {
        todo.title = e.target.value;
        // setTodoList(getTodo);
    })
}
setTitle();

let setAuthor = function() {
    authorElement.addEventListener('input', function(e) {
        todo.author = e.target.value;
        // setTodoList(getTodo);
    })
}
setAuthor();

document.querySelector("#save-todo").addEventListener('click', function(e) {
    todo.updatedAt = currentTime;
    setTodoList(getTodo);
})

removeElement.addEventListener('click', function(e) {
    removeTodo(getTodo, todo.id);
    setTodoList(getTodo);
    location.assign('/index.html');
})

window.addEventListener('storage', function(e) {
    if(e.key === "todos") {
        getTodo = JSON.parse(e.newValue);
        todo = getTodo.find(function(item) {
            return item.id === getTodoHash
        });
        
        titleElement.value = todo.title
        authorElement.value = todo.author
    }
})