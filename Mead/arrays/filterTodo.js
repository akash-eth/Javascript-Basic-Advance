let todoList = [
    {
        title: 'wake',
        author: 'unknown'
    },
    {
        title: '5AM',
        author: 'robin',
    },
    {
        title: 'health',
        author: 'warikoo'
    }
];

let filterTodoList = function(listName, filterData) {
    return listName.filter(function(item, index) {
        let todoTitle = item.title.toLowerCase().includes(filterData);
        let todoAuthor = item.author.toLowerCase().includes(filterData);
        return todoTitle || todoAuthor;
    })
}

let filterTodo = filterTodoList(todoList, 'wake');
console.log(filterTodo);