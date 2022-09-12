/*All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype. */

function Person(name, surname) {
    this.name = name, 
    this.surname = surname
}

Person.prototype.fullName = function() {
    return this.name + ' ' + this.surname;
};

const person1 = new Person('Gabriel', 'Quintão');
const date = new Date();

console.dir(person1);
console.dir(date);

