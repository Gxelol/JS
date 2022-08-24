// let num1 = 5.6435;

// let num3 = Math.floor(num1); //round numbers to the shortest possible value
// let num2 = Math.ceil(num1); //round numbers to the biggest possible value

// console.log(num1, num2, num3);

// num1 = Math.round(num1);
// console.log(num1);

// console.log(Math.max(52.4, 452, 633, 238, 349.2, 332.7, 287.23));
// console.log(Math.min(52.4, 452, 633, 238, 349.2, 332.7, 287.23));

// const random = Math.round(Math.random() * (10 - 5) + 5);
// console.log(random);

// console.log(Math.pow(2, 10)); //= console.log(2 ** 10);

//console.log(16 ** (1/2)); // = square = // console.log(16 ** 0.5);

const numberChosen = Number(prompt(`Type a number:`)); 
const clientNumber = document.getElementById('title-number');
const clientText = document.getElementById('text');

clientNumber.innerHTML = numberChosen;

clientText.innerHTML = '';
clientText.innerHTML += `<p>Square root: ${numberChosen ** 0.5} </p><br/>`; 
clientText.innerHTML += `<p>${numberChosen} is integer: ${Number.isInteger(numberChosen)} </p><br/>`; 
clientText.innerHTML += `<p>Is NaN: ${Number.isNaN(numberChosen)} </p><br/>`; 
clientText.innerHTML += `<p>Round up: ${Math.ceil(numberChosen)} </p><br/>`; 
clientText.innerHTML += `<p>Round down: ${Math.floor(numberChosen)} </p><br/>`; 
clientText.innerHTML += `<p>With two decimal places: ${numberChosen.toFixed(2)} </p><br/>`; 