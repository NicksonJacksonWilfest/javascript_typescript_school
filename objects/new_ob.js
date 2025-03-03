const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

// const person = {};
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.id = 222;
// delete person.age;

// console.log(person);

const person_particular = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    car: {
        type:"Fiat", 
        model:"500", 
        color:"white"
    }
  };

// console.log(person_particular);


const person_constructor = new Object();
person_constructor.firstName = "John";
person_constructor.lastName = "Doe";
person_constructor.age = 50;
person_constructor.eyeColor = "blue";
person_constructor.id = 222;
person_constructor.fullName = function() {
    return this.firstName + " " + this.lastName;
};
person_constructor.car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

// const personArray = Object.values(person_constructor);
// console.log(personArray);

const personString = JSON.stringify(person_constructor);
console.log(personString);

