let notes = [];


//check for existing data
const notesJSON = localStorage.getItem('notes');
if(notesJSON!==null){
    notes = JSON.parse(notesJSON);
}



const filters = {
    searchText:''
}
const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    
   document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p');
        if(note.title.length > 0){
            noteEl.textContent = note.title;
        }
        else{
            noteEl.textContent = 'frkjnrjknrjvn'
        }
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes,filters);

document.querySelector('#create-note').addEventListener('click',function(e){
    notes.push({
        title:'',
        body:''
    })
    localStorage.setItem('notes',JSON.stringify(notes));
    renderNotes(notes,filters);

});

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value;
    renderNotes(notes,filters);
})

// for forms
document.querySelector('#filtered-by').addEventListener('change',function(e){
  console.log(e.target.value);
})


