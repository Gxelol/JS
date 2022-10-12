const { alphabet } = require('./base');

// [abc] -> set
// [^abc] -> denial
// [x-x] -> range 

console.log(alphabet);
// console.log(alphabet.match(/[abc123]+/g));
// console.log(alphabet.match(/[^hijklmno]+/gi));

// console.log(alphabet.match(/[0-9]+/g));
console.log(alphabet.match(/\d+/g));
console.log(alphabet.match(/\D+/g)); //denial

// console.log(alphabet.match(/[^a-gA-G0-9_]+/g)); //denial
console.log(alphabet.match(/\w+/g));
console.log(alphabet.match(/\W+/g)); //denial

console.log(alphabet.match(/\s+/g));
console.log(alphabet.match(/\S+/g));

//You can use Unicode for accented and unusual letters/symbols
