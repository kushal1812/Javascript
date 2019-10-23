const first = () =>{
    setTimeout(()=>{
    console.log('Statement');
    },2000);
}

const second = ()=>{
    console.log('First Statement');
    first();
    console.log('Last Statement');

}

second();