// const person = {
//     name: 'Something',
//     surname: 'Else'
// };

// const key = 'name';
// console.log(person[key]);
// console.log(person['surname']);

// const person1 = new Object();
// person1.name = 'Elizabeth';
// person1.surname = 'Else';
// person1.age = 18;
// person1.sayName = function() {
//     return (`${this.name} is saying her name`);
// }
// person1.getDateBirth = function() {
//     const currentDate = new Date();
//     return currentDate.getFullYear() - this.age;
// }

// const person2 = {
//     name: 'Something',
//     surname: 'Else'
// }

// delete person1.name;
// console.log(person1.getDateBirth());

// for (let key in person1) {
//     console.log(person1[key]);
// }

// function createPerson(name, surname) {
//     return {
//         name,
//         surname,
//         get fullName() {
//             return `${this.name} ${this.surname}`
//         }
//     };
// }

// const p1 = createPerson('Something', 'Else');
// console.log(p1.fullName);

function Person(name, surname) {
    
    this.name = name;
    this.surname = surname;
}

const p1 = new Person('Something', 'Else');
Object.freeze(p1)
p1.name = 'Henry';

const p2 = new Person('Princess', 'Laere');
console.log(p1);
console.log(p2);