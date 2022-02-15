let noteList = getSavedNotes();
let now = moment().valueOf();

let filteredText = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(noteList, filteredText);

document.querySelector("#add-notes-form").addEventListener('submit', function(e) {
    e.preventDefault();
    let newNote = e.target.elements.noteName.value;
    let noteId = uuidv4();
    noteList.push({
        id: noteId,
        title: newNote,
        body: 'unknown',
        createdAt: now.toString(),
        updatedAt: now.toString()
    })
    console.log(noteList);
    saveData(noteList);
    // renderNotes(noteList, filteredText);
    location.assign(`/edit.html#${noteId}`)
    e.target.elemet.noteName.value = '';
})

document.querySelector("#search-input").addEventListener('input', function(e) {
    filteredText.searchText = e.target.value;
    renderNotes(noteList, filteredText);
});

document.querySelector("#filtered-by").addEventListener('change', function(e) {
    filteredText.sortBy = e.target.value
    renderNotes(noteList, filteredText);
});

window.addEventListener('storage', function(e) {
    if(e.key === 'notes') {
        noteList = JSON.parse(e.newValue);
        renderNotes(noteList, filteredText);
    }
})