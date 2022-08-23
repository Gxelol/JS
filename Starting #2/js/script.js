// alert('Learning JavaScript');
// confirm('Are you sure you want to delete?');
// prompt('Type your name:');

// let confirmMessage = confirm('Do you want to delete it?');
// let num1 = prompt('Type a number');
// let num2 = prompt('Type another number');

// num1 = parseFloat(num1)
// num2 = parseFloat(num2)

// const result = num1 + num2

// alert(`The result was ${result}`);

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

let stringPlace = "The text"

console.log(stringPlace[2]);
console.log(stringPlace.charAt(5));
console.log(stringPlace.indexOf('text'));
console.log(stringPlace.match(/[a-z]/)); //(/[a-z]/g)
console.log(stringPlace.search(/t/)); //(/[a-z]/g)
console.log(stringPlace.replace('The', 'A'));
console.log(stringPlace.length);
console.log(stringPlace.slice(3, 7));
console.log(stringPlace.substring(stringPlace.length -3, stringPlace.length -1));
console.log(stringPlace.split(' ', 2));
console.log(stringPlace.toUpperCase());
console.log(stringPlace.toLowerCase());


