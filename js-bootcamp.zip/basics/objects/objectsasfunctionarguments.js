let me ={
    name:'kushal',
    age:23,
    location:'knr'
}

let myFriend={
    name:'sharath',
    age:25,
    location:'wgl'
}

let getInfo = function(person){
    console.log(`${person.name} is ${person.age} years old and lives at ${person.location}`)
}

getInfo(me);
getInfo(myFriend);