const getTip = (amount) =>{
    if(typeof amount === 'number'){
        return amount * .25;
    }
    else{
        throw Error('Argument must be number');
    }
}

//Try Block and catch block
try{
    const result = getTip(true);
    console.log(result);
}
catch(e){
    console.log('Catch Block Executing');
}
