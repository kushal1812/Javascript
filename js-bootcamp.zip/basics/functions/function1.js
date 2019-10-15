farenheitToCelsius = function(farenheit){
    let celsius = (farenheit -32) * (5/9);
  return celsius;
}
let temp70=farenheitToCelsius(70);
console.log(temp70);
let temp32 = farenheitToCelsius(32);
console.log(temp32);