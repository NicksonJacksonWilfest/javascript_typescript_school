function Person (first, last, age, eye, id, any) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.id = id;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
    this.car = {
        type:"Fiat", 
        model:"500", 
        color:"white"
    };
}

Person.prototype.religion = "Christian";
module.exports = Person;

const myFather = new Person("John", "Doe", 50, "blue", 222);
const myMother = new Person("Sally", "Rally", 48, "green", 333);
const myBrother = new Person("David", "Doe", 25, "brown", 444);
const mySister = new Person("Jane", "Doe", 29, "brown", 555);
console.log(myFather.religion);
