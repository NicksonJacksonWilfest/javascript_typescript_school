const car = {
    type: "Fiat", 
    model: "500", 
    color: "white"
}


// const person = {};
const person = new Object()
person.firstName = "John"
person.lastName = "Doe"
person.age = 50
person.eyeColor = "blue"
person.id = 222
delete person.age

console.log(person)

const personParticular = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    car: {
        type: "Fiat", 
        model: "500", 
        color: "white"
    }
  }

console.log(personParticular)


const personConstructor = new Object()
personConstructor.firstName = "John"
personConstructor.lastName = "Doe"
personConstructor.age = 50
personConstructor.eyeColor = "blue"
personConstructor.id = 222
personConstructor.fullName = function() {
    return this.firstName + " " + this.lastName
}

personConstructor.car = {
    type: "Fiat", 
    model: "500", 
    color: "white"
}

const personArray = Object.values(personConstructor)
console.log(personArray)

const personString = JSON.stringify(personConstructor)
console.log(personString)

