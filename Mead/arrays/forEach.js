let todoList = ['walk', 'work', 'wine', 'enjoy', 'life'];

todoList.forEach(function(item, index) {
    let indexFromOne = index + 1;
    console.log(`${indexFromOne}. ${item}`);
})