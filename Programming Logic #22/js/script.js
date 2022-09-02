// function fizzBuzz(num) {
//     if (typeof num !== 'number') {
//         return num;
//     } else if(num % 3 === 0 && num % 5 === 0) {  
//         console.log('FizzBuzz');
//     } else if (num % 3 === 0) {
//         console.log('Fizz');
//     } else if (num % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(num);
//     }
// }

// fizzBuzz(Math.floor(Math.random() * 100));

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
