function Product(name, price, stock) {
    Object.defineProperty(this, 'stock', {
        enumerable: true, 
        value: stock,
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, 
            value: stock,
            writable: true,
            configurable: false
        },
        price: {
            enumerable: true, 
            value: stock,
            writable: true,
            configurable: false
        }, 
        stock: {
            enumerable: true, 
            value: stock,
            writable: true,
            configurable: false
        }    
    });
}

const p1 = new Product('T-shirt', 20, 6);
console.log(p1);

for (let key in p1) {
    console.log(key);
}