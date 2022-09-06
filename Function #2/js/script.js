// function some() {
//     console.log(arguments[1]);
// }
// some('x', 'y', 'z'); 

// function some(a, b, c) {
//     let total = 0;
//     for(argument of arguments) {
//         total += argument;
//     }
//     console.log(total, a, b, c);
// }

// function some(a, b, c, d, e, f) {
//     console.log(a, b, c, d);
//     }
// some(1, 2, 3, 4, 5);

// function sum(a, b = 3, c = 12) {
//     console.log(a + b + c);
//     }
// sum(5, undefined, 8);

// function person({name, surname, age}) {
//     console.log(name, surname, age);
// }
// person({name: 'Henry', surname: 'Lukas', age: '29'})

// function person([value1, value2, value3]) {
//     console.log(value1, value2, value3);
// }
// person(['Henry', 'Lukas', '29'])

const calc = function(operator, accumulator, ...numbers) {
    for (let number of numbers) {
        if (operator === '+') accumulator += number;
        if (operator === '-') accumulator -= number;
        if (operator === '*') accumulator *= number;
        if (operator === '/') accumulator /= number;
    }
    console.log(accumulator);
};

calc('+', 0, 4, 6, 8, 9);
