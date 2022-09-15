class Person {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    }

    speak() {
        console.log(`${this.name} is talking`);
    }

    // eat() {
    //     console.log(`${this.name} is eating`);
    // }

    // drink() {
    //     console.log(`${this.name} is drinking`);
    // }
}

function Person2(name, surname) {
    this.name = name;
    this.surname = surname;
};
Person2.prototype.speak = function() {
    console.log(`${this.name} is talking`);
}



const p1Class = new Person('Gabriel', 'Quintão');
const p1ConstructorF = new Person2('Gabriel', 'Quintão');
// const p2 = new Person('Ursula', 'Kolor');
// const p3 = new Person('Patricia', 'Cabello');
// console.log(p1);
// console.log(p2);
// console.log(p3);
console.log(p1Class);
console.log(p1ConstructorF);