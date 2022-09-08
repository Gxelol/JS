function Person(name, surname) {
    // const ID = 7629321;
    // const iMethod = () => {

    // };

    this.name = name;
    this.surname = surname;

    this.method = () => {
        console.log(this.name + ': method');
    };
}

const p1 = new Person('James', 'Jade');
const p2 = new Person('Maria', 'Silva');

p1.method();
p2.method();