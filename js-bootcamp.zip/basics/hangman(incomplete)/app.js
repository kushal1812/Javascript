// I) product ---->Object.Prototype --->null

//1
const product ={
    name:'influence'
}
//Here Object Constructor(new keyword) is used by seeing the syntax 
//2
const product =  new Object();
product.name = 'rest';
// Here 1 is same as 2

//Override hasOwnProperty
Object.prototype.hasOwnProperty = () =>`This is a new function`
Object.prototype.someOtherFunction = () =>`This is a someOtherFunction `

console.log(product.hasOwnProperty('name'));
console.log(product.someOtherFunction());

console.log(product);



