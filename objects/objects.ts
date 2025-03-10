// Objects workout

const Person = {
    firstName: 'Nickson',
    surName: 'Jackson',
    age: '23',
    phoneNumber: '0756642902',
    homeAddress: 'Makuburi',
    emailAddress: 'nicksonsamo@gmail.com',
    schoolAddress: 'College of Business Education',
    id: undefined

};

Person.id = 222;
delete Person.age
const x = Person.age
console.log('parentName' in Person);

const age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);