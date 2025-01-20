// Objects workout

let Person = {
    firstName: 'Nickson',
    surName: 'Jackson',
    age: '23',
    phoneNumber: '0756642902',
    homeAddress: 'Makuburi',
    emailAddress: 'nicksonsamo@gmail.com',
    schoolAddress: 'College of Business Education',
};

Person.id = 222;
delete Person.age
let x = Person.age
console.log('parentName' in Person);