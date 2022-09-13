// Product -> increase, discount
// T-shirt, Mug, Sunglass, Shoes - - Color, material

function Product(name, price, color, material) {
    this.name = name, 
    this.price = price,
    this.color = color,
    this.material = material
}
Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage/100))
}
Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage/100))
}

function Shirts(name, price, color, material) {
    Product.call(this, name, price, color, material);
}
Shirts.prototype = Object.create(Product.prototype);
Shirts.prototype.constructor = Shirts;

// Shirts.prototype.increase = function(value) {
//     this.price += value;
// }

function Mug(name, price, color, material, stock) {
    Product.call(this, name, price, color, material)

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,

        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== 'return') return;
            stock = value;
        }
    }) 
}
Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug;

function Sunglass(name, price, color, material) {
    Product.call(this, name, price, color, material) 
}
Sunglass.prototype = Object.create(Product.prototype)
Sunglass.prototype.constructor = Sunglass;

function Shoes(name, price, color, material, stock) {
    Product.call(this, name, price, color, material)

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,

        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== 'return') return;
            stock = value;
        }
    }) 
}
Shoes.prototype = Object.create(Product.prototype)
Shoes.prototype.constructor = Shoes;


const tank = new Shirts('Tank', 13.59, 'White', 'Silk'); 
const redMug = new Mug('Red mug', 4.99, 'Red', 'Glass', 19);
const whiV = new Sunglass('Whi-V', 63.99, 'White', 'Plastic/Acetate');
const terNoiL = new Shoes('Ter-NoiL', 99.99, 'Light Brown', 'Leather', 3);

tank.increase(10);
redMug.discount(10);

console.log(tank);
console.log(redMug);
console.log(whiV);
console.log(terNoiL);

// console.log(redMug.stock);
// console.log(terNoiL.stock);