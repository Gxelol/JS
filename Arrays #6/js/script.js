//Reduce like reduce

const array1 = [5, 87, 65, 42, 23, 5, 78, 94, 65];
const total = array1.reduce(function(accumulator, value) {
    accumulator += value;
    return accumulator;    
}, 0);

// console.log(total);

//Reduce like filter

const array2 = [5, 87, 65, 42, 23, 5, 78, 94, 65];
const even = array2.reduce(function(accumulator, value) {
    if (value % 2 === 0) accumulator.push(value);
    return accumulator;    
}, []);

// console.log(even);

//Reduce like map

const array3 = [5, 87, 65, 42, 23, 5, 78, 94, 65];
const double = array3.reduce(function(accumulator, value) {
    accumulator.push(value * 2)
    return accumulator;    
}, []);

// console.log(double);

const person = [
    {name: 'Princess', age: 19},
    {name: 'Luigi', age: 18},
    {name: 'Osvald', age: 26},
    {name: 'Tales', age: 57},
    {name: 'Zelda', age: 37},
    {name: 'Meliper', age: 67},
];

const oldest = person.reduce(function(accumulator, value) {
    return accumulator.age > value.age ? accumulator : value;
});

console.log(oldest);
