// const nameClient = prompt('Type your full name:');
// document.body.innerHTML += `Your name is ${nameClient} <br>`;
// let nameClientWithouSpaces = nameClient.replace(/ /g, '');
// document.body.innerHTML += `Your name have ${nameClientWithouSpaces.length} letters <br>`;
// document.body.innerHTML += `The second letter of your name is: ${nameClient[2]} <br>`;
// document.body.innerHTML += `What is the first index of letter 'a' in your name? ${nameClient.indexOf('a')} <br>`;
// document.body.innerHTML += `What is the last index of letter 'a' in your name? ${nameClient.lastIndexOf('a')} <br>`;
// document.body.innerHTML += `The three last letter of your name is ${nameClient.slice(-3)} <br>`;
// document.body.innerHTML += `The words of your name is ${nameClient.split(' ')} <br>`;
// document.body.innerHTML += `Your name in uppercase: ${nameClient.toUpperCase()} <br>`;
// document.body.innerHTML += `Your name in lowercase: ${nameClient.toLowerCase()} <br>`;


let num1 = 220; 
let num2 = 40.5328;

console.log(num1.toString() + num2);
console.log(num1.toString(2)); //To show binary version of the number 
console.log(num2.toFixed(2));
console.log(Number.isInteger(num1));

let temp = num1 * num2;
console.log(Number.isNaN(temp));
console.log(typeof(temp));

let num3 = 0.9;
let num4 = 0.1;

num3 += num4

console.log(parseFloat(num3.toFixed(2)))
console.log(Number.isInteger(num3));
