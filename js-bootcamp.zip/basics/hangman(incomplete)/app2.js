//II)
/*Primitive Value : primitive value is a thing that doesnot 
any properties a non object value 
Primitive value:String,number,boolean,null,undefined */


//Object : muObject ---->Object.prototype ---> null
//Array:myArray ---Array.prototype ---->Object.prototype --->null
//Function:myFunc ---function.prototype ---->Object.prototype --->null
//String:myString ---String.prototype ---->Object.prototype --->null
//Number:myNumber ---Number.prototype ---->Object.prototype --->null
//Boolean:myBoolean ---Boolean.prototype ---->Object.prototype --->null




const team =['player1','player2'];
console.log(team.hasOwnProperty('length'));


const getScore = () => 1;
console.log(getScore);

const product = 'computer';
console.log(product);

const otherProduct = new String('laptop');
console.log(otherProduct);
