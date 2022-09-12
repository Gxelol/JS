// const product2 = Object.assign({}, product1, {material: 'silk'});
// const product2 = {
//     ...product1, 
//     material: 'silk'
// };
// product2.name = 'Curtain';
// product2.price = 50;
// console.log(product2);
    
// Object.freeze(product)
// product.name = `Something`;
// console.log(Object.keys(product));
// console.log(Object.getOwnPropertyDescriptor(product, 'name'));
// console.log(Object.values(product));
// console.log(Object.keys(product));
    
const product = {name: 'Mug', price: 2, material: 'porcelain'};

for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}