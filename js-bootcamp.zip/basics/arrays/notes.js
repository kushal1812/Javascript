const notes = [
    {
        title:'My next trip',
        body:'I would like to go to spain'
    },
    {
        title:'Habbits to work on',
        body:'Exercise,Eating a bit better'
    },
    {
        title:'Office modification',
        body:'Get a new seat'
    }
]
//ARRAY METHODS 
// console.log(notes);
// console.log(notes.length);
// console.log(notes.pop());
// notes.push('notes4');
// console.log(notes.shift());
// notes.unshift('added through unshift element');
// notes.splice(1,1);
// notes.splice(1,2,'added through splice')
// notes[2]= 'replaced notes 3';
// console.log(notes);

//forEach()
// notes.forEach(function(note,index){
//     const num = index+1
//     console.log(`${note}-${num}`);
// })
//for() 
// for(let count =0;count<notes.length;count++){
//     console.log(notes[count]);
// }

//findIndex()
// const findIndexCount = notes.findIndex(function(note){
//     return note.title === 'title two'
// })

// console.log(findIndexCount);



// const findNotes = function(notes,noteTitle){
//     const index = notes.findIndex(function(note){
//             return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// }
// const fullNote = findNotes(notes,'Title three');
// console.log(fullNote);

//find Method

// const findNotes = function(notes,noteTitle){
//     return notes.find(function(note){
//             return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
    
// }
// const fullNote = findNotes(notes,'Title two');
// console.log(fullNote);

//filter methods
 


const findNotes = function(notes,noteTitle){
    return notes.filter(function(note){
        const isTitleMatch = note.title.toLowerCase().includes(noteTitle.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(noteTitle.toLowerCase());
        return isTitleMatch|| isBodyMatch;
    })
}

console.log(findNotes(notes,'eating'));

