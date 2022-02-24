const products = [
    { name: 'singara', price: 7 },
    { name: 'somucha', price: 10 },
    { name: 'jilapi', price: 15 }
];
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
    console.log(totalPrice);
}