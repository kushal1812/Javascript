let todos = [];

const todosJSON = localStorage.getItem('todos');
if(todosJSON!==null){
    todos = JSON.parse(todosJSON);
}


const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
});

const paragraph = document.createElement('p');
paragraph.textContent = `You have ${incompleteTodos.length} todos to complete`;
document.querySelector('body').appendChild(paragraph);
 

const filters ={
    searchTodo:''
}

const renderTodos =function(todos,filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
    })
    document.querySelector('#todos').innerHTML = '';
    filteredTodos.forEach(function(todo){
        const p =document.createElement('p');
        if(todo.text.length > 0){
            p.textContent = todo.text;
        }
        else{
            p.textContent = 'unnamed todo'
        }
        document.querySelector('#todos').appendChild(p); 
    })
}
renderTodos(todos,filters);

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchTodo = e.target.value;
    renderTodos(todos,filters);
})
//form
document.querySelector('#add-form').addEventListener('submit',function(e){
    e.preventDefault();
    todos.push({
        text:e.target.elements.addTodo.value,
        completed:false
    })
    localStorage.setItem('todos',JSON.stringify(todos));
    renderTodos(todos,filters);
    e.target.elements.addTodo.value = '';
    console.log(todos);
})

//checkbox
document.querySelector('#hide-completed').addEventListener('change',function(e){
    let value = e.target.checked;
    let filteredValues;
    if(value){
        filteredValues = todos.filter(function(todo){
                return !todo.completed;
        })
        renderTodos(filteredValues,filters);
    }
    else{
        renderTodos(todos,filters);

    }
})

// Add todo
document.querySelector('#add-todo').addEventListener('click',function(e){
    todos.push({
        text:e.target.elements.text.value,
        isCompleted:false
    })
    localStorage.setItem('todos',JSON.stringify(todos));
    renderTodos(todos,filters);
})