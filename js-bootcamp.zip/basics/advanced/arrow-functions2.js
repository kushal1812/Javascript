/*******
 Difference between regular functions and arrow functions
 ********/
//1
 const add = function(a,b){
     console.log(arguments)
 }

 add(11,12,13,14,15);

 //2 Regular function
 const multiply = function(a,b){
     return arguments[0] * arguments[1];
 }
 console.log(multiply(11,12,13,14,15));
 //3 Arrow function
//  const multiplyarrow = () =>{
//      return arguments[0] * arguments[1];
//  }
//  console.log(multiplyarrow(11,12,13,14,15));
 //observe result of 2 and 3

 //4 Regular functions object
 const car ={
     color:'red',
     getSummary:function(){
         return `The car is ${this.color}`
     }
 }
 console.log(car.getSummary());
 
//5 Arrow Functions Object
const carA ={
    color:'red',
    getSummary:()=>{
        return `The car is ${this.color}`

    }
}
console.log(carA.getSummary());
//6 Old function in oject
const carB ={
    color:'red',
    getSummary(){
        return `The car is ${this.color}`

    }
}
console.log(carB.getSummary());
