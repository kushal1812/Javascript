/*We have an object and pass that object as an argument to function
Because we pass the object now it is accesible in function body
what happens if we change an object property in the function .Does it change
1)the object in the function 
2)the object passed in the function 
3)both
Answer is both because objects are passed by reference*/

let myAccount={
    name:'kushal',
    income:0,
    expense:0
}
let totalBalanceInMyAccount = function(amount){
    amount.income = amount.income+2000;
    console.log(amount);
}
let balance = totalBalanceInMyAccount(myAccount);
console.log(myAccount);

/*So Property changes will be reflected ,
but this relationship will break if we try to add new value*/


let addNewProperty = function(addNew){
    addNew={}
    addNew.age=1
    console.log(addNew);
}
let newValue=addNewProperty(myAccount);
console.log(newValue) ;
//we will get {age:1},undefined as output


