let myDetails = function(farenheitValue){
    return{
        farenheit:farenheitValue,
        celsius: (farenheitValue -32) * (5/9),
        kelvin:(farenheit+459.67) * (5/9)
    }
}

let temp = myDetails(32);
console.log(temp);