// const car = {
//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// };

// const person = {};
type Person = {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
    id: number;
};

const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    id: 222
};


// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// person.id = 222;

// console.log(person);

const personDetails = {
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

console.log(personDetails.fullName().toUpperCase());
// console.log(personDetails);