//Convert array to  an array of objects  .
//Create a function to remove a todo by text value .

// const todos = ['todo1','todo2','todo3','todo4','todo5'];
// const todoslength  = todos.length;
// console.log(`you have ${todoslength} todos`);
// console.log(todos[0],todos[todoslength-2]);

// todos.splice(2,0);
// todos.push('added at last');
// todos.shift()
// console.log(todos);



const todos = [
    {
        text:'Order cat food',
        completed: true
    },
    {
        text:'Clean kitchen',
        completed: false
    },
    {
        text:'Buy food',
        completed: true
    },
    {
        text:'Do work',
        completed: false
    },
    {
        text:'Exercise',
        completed: true
    }
]

// const deleteTodos = function(todos,todosText){
//     const index = todos.findIndex(function(todo){
//         return todo.text === todosText
//     })
//     if(index > -1){
//         todos.splice(index,1);

//     }
// }

// deleteTodos(todos,'complete html');
// console.log(todos);


const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
}


console.log(getThingsToDo(todos));