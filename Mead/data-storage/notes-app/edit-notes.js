let currentTime = moment().valueOf();
console.log(currentTime);
let getNoteHash = location.hash.substring(1);
let getNote = getSavedNotes();
let note = getNote.find(function(item) {
    return item.id === getNoteHash;
})

if(note === undefined) {
    location.assign('/index.html');
}

let titleElement = document.querySelector('#note-title');
let bodyElement = document.querySelector('#note-body');
let saveButtonElement = document.querySelector('#save-update');
let removeButtonElement = document.querySelector('#remove-note');
let lastEdited = document.querySelector("#last-edited");

titleElement.value = note.title;
bodyElement.value = note.body;

let setTitle = function() {
    titleElement.addEventListener('input', function(e) {
        let titleData = e.target.value;
        note.title = titleData;
    })
}
setTitle();

let setBody = function() {
    bodyElement.addEventListener('input', function(e) {
        let bodyData = e.target.value;
        note.body = bodyData;
        generateLastEditedMessage(note.updatedAt);
    })
}
setBody();

saveButtonElement.addEventListener('click', function(e) {
    note.updatedAt = currentTime.toString();
    saveData(getNote);
    generateLastEditedMessage(note.updatedAt)
})

removeButtonElement.addEventListener('click', function(e) {
    console.log(note.id);
    removeNote(getNote, note.id)
    saveData(getNote);
    location.assign('/index.html');
})

window.addEventListener('storage', function(e) {
    if(e.key === 'notes') {
        getNote = JSON.parse(e.newValue);
        note = getNote.find(function(item) {
            return item.id === getNoteHash;
        })
        
        if(note === undefined) {
            location.assign('/index.html');
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;

        generateLastEditedMessage(note.updatedAt)
    }
})