//map

const num = [72, 34, 64, 83, 4, 75, 39, 7, 37 ,27, 8, 56, 46, 2];

const numDouble = num.map(value => value * 2);
console.log(numDouble);

const person = [
    {name: 'Princess', age: 62},
    {name: 'Luigi', age: 19},
    {name: 'Osvald', age: 34},
    {name: 'Tales', age: 57},
    {name: 'Zelda', age: 23},
    {name: 'Meliper', age: 31},
];

const names = person.map(obj => obj.name);
const age = person.map(obj => ({age: obj.age}));
const withId = person.map(function(obj, index) {
    const newObj = {...obj};
    newObj.id = (index + 1) * 1000;
    return newObj;
});


console.log(person, withId);
// console.log(names);
// console.log(age);
