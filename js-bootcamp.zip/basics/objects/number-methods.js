let num = 103.641;

//toFixed
//removes the decimal points as specified.

console.log(num.toFixed(2));

console.log(Math.round(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

// to generate a random number
console.log(Math.floor(Math.random()*10));




//If the argument cannot be converted into a number, it returns NaN.
//Number.isNan() --->Determines whether passed value value is NaN;
//Number.isFinite() --->Determines whether passed value value is an Finite.
console.log(Number.isFinite(1000/0));
//Number.isInteger() ----> Determnes whether passed value is integer .
console.log(Number.isInteger(0));
//Number.isSafeInteger() -->Determines whether passed value is safe integer ()



