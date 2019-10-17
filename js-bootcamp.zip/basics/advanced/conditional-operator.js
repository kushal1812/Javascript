const myAge = 27;
let message1message;
//1 regular conditional operator
if(myAge>=27){
    message = 'You can vote'
}else{
    message = 'You cannot vote'
}
console.log(message);

//2 conditional operator
const message1 =  myAge>=18 ? 'You can vote' : 'You cannot vote'
console.log(message1);

//3 conditional operator with functions 
const showPage = () =>{
    console.log('Page Found');
}
const showErrorPage = () =>{
    console.log('Page Not Found');
}
myAge>=18 ? showPage() : showErrorPage()

//4 conditional operator with function return types
const showPage1 = () =>{
    return `Showing the page`
}
const showErrorPage1 = () =>{
    return `Showing the error page`
}
const message2 = myAge >=18 ? showPage1() : showErrorPage1()
console.log(message2);

//5 challenge
//1.Print "Team Size:3 if less than or equal to 4"
//1.Print "Too many people on your team otherwise"

const team = ['sharath','sateesh','hitesh','shravan','kushal'];

const cha = team.length <=4 ? `Team Size :${team.length}` : `Too many people on your team`;
console.log(cha);



