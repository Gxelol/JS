const people = [
    {id: 3, name: 'Gabriel'},
    {id: 2, name: 'Yuka'},
    {id: 1, name: 'Andrea'},
];

// const newPeople = {}
// for (person of people) {
//     const { id } = person;
//     newPeople[id] = {...person};
// }

const newPeople = new Map();

for (person of people) {
    const { id } = person;
    newPeople.set(id, {...person});
}

for (const [identifier, {id, name}] of newPeople) {
    console.log(identifier, id, name);
}
