// const _velocity = Symbol('velocity');

// class Car {
//     constructor(name) {
//         this.name = name;
//         this[_velocity] = 0;
//     }

//     get velocity() {
//         console.log('getter');
//         return this[_velocity];
//     }
//     set velocity(value) {
//         console.log('setter');
//         if (typeof value !== 'number') return;
//         if (value >= 290 || value <= 0) return;
//         this[_velocity] = value;
//     }

//     accelerate() {
//         if(this[_velocity] >= 290) return;
//         this[_velocity]++
//     }

//     stop() {
//         if ((this[_velocity] <= 0)) return 
//         this[_velocity]--;
//     }
// }

// const c1 = new Car('Fusca');

// for (let i = 0; i <= 300; i++) {
//     c1.accelerate();
// }

// c1.velocity = 100;
// console.log(c1.velocity);

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + ' ' + this.surname;
    }

    set fullName(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.surname = value.join(' ');
    }
}

const p1 = new Person('Gabriel', 'Quintão');
p1.fullName = 'Larissa Oliveira Silva'
console.log(p1);