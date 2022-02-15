// fetching data from local storage:
let getSavedNotes = function() {
    let notesJSON = localStorage.getItem('notes');
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    }
    else {
        return []
    }
}

// save data to local storage:
let saveData = function(list) {
    localStorage.setItem('notes', JSON.stringify(list));
}

// remove notes on clicking cross button:
let removeNote = function(list, id) {
    let getNoteById = list.findIndex(function(item) {
        return item.id === id;
    })
    if(getNoteById > -1) {
        list.splice(getNoteById, 1);
    }
}

// generate dom for dumping data:
let generateDOM = function(item) {
    let NoteElement = document.createElement('div');
    let textElement = document.createElement('a');
    let buttonElement = document.createElement('button');

    buttonElement.textContent = 'x';
    NoteElement.appendChild(buttonElement);
    buttonElement.addEventListener('click', function() {
        removeNote(noteList, item.id);
        saveData(noteList);
        renderNotes(noteList, filteredText)
    })

    textElement.setAttribute('href', `/edit.html#${item.id}`)

    if(item.title.length > 0) {
        textElement.textContent = item.title
    }
    else {
        textElement.textContent = 'unknown'
    }
    NoteElement.appendChild(textElement);
    return NoteElement
}

let sortedNotes = function(note, sortBy) {
    if(sortBy === 'byEdited') {
        return note.sort(function(a, b) {
            if(a.updatedAt > b.updatedAt) {
                return -1
            }
            else if(a.updatedAt < b.updatedAt) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    else if(sortBy === 'byCreated') {
        return note.sort(function(a, b) {
            if(a.createdAt > b.createdAt) {
                return -1
            }
            else if(a.createdAt < b.createdAt) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    else if(sortBy === 'alphabetical') {
        return note.sort(function(a, b) {
            if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1
            }
            else if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            }
            else {
                return 0
            }
        })
    }
}

// render notes:
function renderNotes(list, filterText) {
    list = sortedNotes(list, filterText.sortBy);
    console.log(list);
    console.log(filterText.sortBy);
    let filteredNotes = list.filter(function(note) {
        return note.title.toLowerCase().includes(filterText.searchText)
    })

    document.querySelector("#filtered-notes").innerHTML = ''

    return filteredNotes.forEach(function(item) {
        let sortedNote = generateDOM(item);
        document.querySelector('#filtered-notes').appendChild(sortedNote);
    })
}

function generateLastEditedMessage(timestamp) {
    return lastEdited.textContent = `last updated at ${moment(timestamp).fromNow()}`;
}