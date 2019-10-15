let name='Andrew Mead';


//Length Property
console.log(name.length);

//upper case
console.log(name.toUpperCase());

//lowecse
console.log(name.toLowerCase());

//includes
let password = '12345678';
console.log(password.includes('6h'));

//trim
/*removes white space from both ends of a string*/
let nams=' kuhsl '
console.log(nams);
console.log(nams.trim());

//Challenge 

//isValidPassword()
//lengh is more than 8 - and it doesnot contain the password




let isValidPassword = function(passwordvalue){
    return (passwordvalue.length>8 && passwordvalue.includes('password'));
}

console.log(isValidPassword('kushalreddy'));