// function createPerson(name, surname) {
//     return {
//         name, surname
//     };
// }

// const p1 = createPerson('Henry', 'Kamado');
// console.log(p1);

// function createPerson(name, surname, weight, height) {
function createPerson(name, surname) {
    return {
        name, 
        surname,

        get fullName() {
            return `${name} ${surname}`;
        },

        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join();
            console.log();
        }

    //     say(daytime) {
    //         return `Hello ${this.name}, have a ${daytime}`
    //     },

    //     weight,
    //     height,
        
    //     get bmi() {
    //         const index = this.weight  / (this.height ** 2);
    //         // return `${this.fullName()}, Your bmi is ${index.toFixed(2)}`;
    //         return `Your bmi is ${index.toFixed(2)}`;
    //     }
    };
}

const p1 = createPerson('Henry', 'Kamado', 72, 1.80);
// const p2 = createPerson('Joana', 'Parada', 50, 1.57);


p1.fullName = ('Peter Javas Ledi')

// console.log(p1.say('good morning'));
// console.log(p1.bmi);
// console.log(p2.say('good morning'));
// console.log(p2.bmi);

console.log(p1.name);
console.log(p1.surname);