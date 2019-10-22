const person = function(firstName,lastName,age,likes = []){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}`;

    //Now the arrow function is able to access this becuse JS looks for parent function
    this.likes.forEach((like)=>{
        bio+= ` ${this.firstName}  likes  ${like}.`
    });
    return bio;
}

person.prototype.setName = function(fullName){
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];

}

const person1 = new person('KUSHAL','REDDY',24,['Politics','Ethics']);
person1.getBio = function(){
    return `This is fake!`;
}

person1.setName('Sateesh Chilukuri');
console.log(person1.getBio());


const person2 = new person('Hitesh','Janga',24);
console.log(person2.getBio());




