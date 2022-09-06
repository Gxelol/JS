// return

// function sum(a, b) {
//     return a + b;
// }

// function createPerson(name, surname) {
//     return {name, surname}
// }

// const p1 = createPerson('Gabriel', 'Quintão'); // = const p1 = {name: 'Gabriel', surname: 'Quintão'};

// function sayPhrase(start) {
//     function sayRest(rest) {
//         return start + ' ' + rest;
//     }
//     return sayRest;
// }

// const helloWorld = sayPhrase('Hello');
// console.log(helloWorld('World'));

function createMultiplier(multiplier) {
    function multiplication(n) {
        return n * multiplier;
    };
    return multiplication;
}

const duplicate = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(duplicate(6));
console.log(triple(4));
console.log(quadruple(3));