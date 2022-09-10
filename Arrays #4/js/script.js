//Filter

// const num = [72, 34, 64, 83, 4, 75, 39, 7, 37 ,27, 8, 56, 46, 2];

// const numFiltered = num.filter(value => value > 10);

// console.log(num, numFiltered);

const person = [
    {name: 'Princess', age: 62},
    {name: 'Luigi', age: 19},
    {name: 'Osvald', age: 34},
    {name: 'Tales', age: 57},
    {name: 'Zelda', age: 23},
    {name: 'Meliper', age: 31},
];

const personMore5Letters = person.filter(obj => obj.name.length > 5)
console.log(personMore5Letters);

const personMore50Y = person.filter(obj => obj.age > 50)
console.log(personMore50Y);

const nameEndWithA = person.filter(obj => obj.name.toLowerCase().endsWith('a'))
console.log(nameEndWithA);