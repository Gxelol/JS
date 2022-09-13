// const objA = {
//     keyA: 'A'
// };

// const objB = {
//     keyB: 'B'
// };

// const objC = {
//     keyC: 'C'
// };

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objA);
// console.log(objC.keyA);

function Product(name, price) {
    this.name = name,
    this.price = price
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage/100))
}

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage/100))
}

const p1 = new Product('T-shirt', 30);

const p2 = {
    name: 'Short',
    price: 20
}
Object.setPrototypeOf(p2, Product.prototype)

const p3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    }, 
    name: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: 'Sunglass'
    }
});

p1.discount(20);
p2.increase(15);
p3.increase(5);

console.log(p1);
console.log(p2);
console.log(p3);