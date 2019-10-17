const squareLong = (num) =>{
    return num*num;
}
const square = (num) => num * num;

console.log(squareLong(4));
console.log(square(5));

const people = [{
    name : "kushal",
    age :22
},{
    name : "hitesh",
    age:23
},
{
    name : 'sharath',
    age :31
}
]

//previous method
const under30 = people.filter(function(person){
    return person.age<30
})
//arrow method
const under301 = people.filter((person)=>{
    return person.age<30
})
// arrow method simpler
const under302 = people.filter((person) => person.age<30);
console.log(under30);
console.log(under301);
console.log(under302);

// Challenge1
//Find the person with age 22
//Print that perosns name

//My answer
const age22 = people.filter((person)=>{
    if(person.age === 22){
        return person.name
    }
})
console.log(age22);

//Tutorail answer
const age221 = people.find((person)=> person.age===22);
console.log(age221.name);


