const talk = {
    talk() {
        console.log(`${this.name} is talking.`);
    }
};

const eat = {
    eat() {
        console.log(`${this.name} is eating.`);
    } 
};

const drink = {
    drink() {
        console.log(`${this.name} is drinking.`);
    } 
};

const personPrototype = Object.assign({}, talk, eat, drink);

function createPerson(name, surname) {    
    return Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname}
    });
 }

const p1 = createPerson('Gabriel', 'Quintão');
const p2 = createPerson('Yuka', 'Utsunomya');
console.log(p1.talk( ));