function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false, 
        get: function() {
            return privateStock;
        },
        set: function(value) {
            if (typeof value !== 'number') {
                throw new TypeError('Message');
            }

            privateStock = value;
        }
    });
}

function createProduct(name) {
    return {
        get name() {
            return name;
        }, 
        set name(value) {
            value = value.replace('Else', '')
            name = value;
        }
    }
}

// const p1 = new Product('T-shirt', 20, 6);
// p1.stock = 8;
// console.log(p1);
// console.log(p1.stock);

const p2 = createProduct('T-shirt');
p2.name = 'Something Else';
console.log(p2.name);