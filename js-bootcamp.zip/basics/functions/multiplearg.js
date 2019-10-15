let sum = function(x,y,z){
    let sum=x+y+z;
    return sum;
}

let sumOfValues = sum(2,3,4);
console.log(sumOfValues);

//Arguments defaults
let getScoreText = function(name='DEFAULt',score = 0){
    return `${name} score is ${score}`;
}


let tempVariable = getScoreText(undefined,11);
console.log(tempVariable);
