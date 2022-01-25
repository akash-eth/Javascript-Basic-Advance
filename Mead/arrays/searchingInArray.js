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

let findIndexOfList = todoList.findIndex(function(item, index) {
    return item.title === 'health';
});
console.log(findIndexOfList);

let searchInTodo = function(listName, itemToSearch) {
    // basic logic ->
        // let userSearch = listName.findIndex(function(item, index) {
        //     let itemSearch = item.title === itemToSearch;
        //     if(itemSearch) {
        //         console.log(item);
        //     }
        // })
    // logic using findIndex -> returns index
        // return userSearch;
        // let userSearch = listName.findIndex(function(item, index) {
        //     return item.title.toLowerCase() === itemToSearch;
        // })
        // return listName[userSearch]
    // logic using find -> returns the element
        let userSearch = listName.find(function(item, index) {
            return item.title.toLowerCase() === itemToSearch;
        })
        return userSearch
}

console.log(searchInTodo(todoList, 'wake'))


// delete a todo from the list -> 

let deleteTodo = function(listName, itemToBeDeleted) {
    let userSearch = listName.findIndex(function(item, index) {
        return item.title === itemToBeDeleted;
    });
    // a if block for security check that the item exist or not
    if(userSearch > -1) {
        listName.splice(userSearch, 1);
    }
} 

deleteTodo(todoList, '5AM')

console.log(todoList);