// const client1 = {
//     clientName: 'Gustavo',
//     clientSurname: 'Zoro',
//     clientAge: 24
// };

// const client2 = {
//     clientName: 'Pamela',
//     clientSurname: 'Maria',
//     clientAge: 35
// };

// console.log(client1.clientName);
// console.log(client2.clientSurname);

// function createClient(clientName, clientSurname, clientAge) {
//     return {clientName, clientSurname, clientAge};
// };

// const client1 = createClient('Pedro', 'Antonio', 67);
// const client2 = createClient('Henrico', 'Tanaka', 23);
// const client3 = createClient('Alexandre', 'Tancredo', 45);
// const client4 = createClient('Thiago', 'Elias', 33);

// console.log(client1.clientAge, client2.clientName, client4.clientSurname);

const person1 = {
    name: 'Italo',
    surname: 'Nara',
    age: 23,

    // talk() {
    //     console.log(`${this.name} ${this.surname} is saying hello!!`);
    // },

    talk() {
        console.log(`My current age is ${this.age}`);
    },

    incrementAgr() {
        this.age++;
    }
};

person1.talk();
person1.incrementAgr();
person1.talk();