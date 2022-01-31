let noteList = [
    {
        title: "road trip",
        body: "planning a road trip this weekend"
    },
    {
        title: "food sub",
        body: "going to subway"
    },
    {
        title: "work",
        body: "working with javascript"
    },
    {
        title: "ideal",
        body: "warikoo is one of them"
    }
]

// let para = document.querySelectorAll('p');
// p.forEach(function(item) {
//     console.log(item);
//     // item.remove()
//     // item.textContent("content has been changed");
// })

let produceOutput = function(list) {
    list.forEach(function(item) {
        let addPara = document.createElement('p');
        addPara.textContent = item.title;
        document.querySelector('body').appendChild(addPara);
    })
}

produceOutput(noteList);

let filteredText = {
    searchText: ''
}

function renderNotes(list, filterText) {
    let filteredNotes = list.filter(function(note) {
        return note.title.toLowerCase().includes(filterText.searchText)
    })

    document.querySelector("#filtered-notes").innerHTML = ''

    return filteredNotes.forEach(function(item) {
        let sortedNote = document.createElement('p');
        sortedNote.textContent = item.title;
        document.querySelector('#filtered-notes').appendChild(sortedNote);
    })
}

renderNotes(noteList, filteredText);

document.querySelector("#create-note").addEventListener('click', function(e) {
    e.target.textContent = 'submitted';
});

document.querySelector("#search-input").addEventListener('input', function(e) {
    filteredText.searchText = e.target.value;
    renderNotes(noteList, filteredText);
});

document.querySelector("#notes-form").addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
});

document.querySelector("#filtered-by").addEventListener('change', function(e) {
    console.log(e.target.value);
});