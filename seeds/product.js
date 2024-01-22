const { Product } = require('../models');

const productData = [
    {
        product_name: 'T-Shirt',
        price: 19.99,
        stock: 27,
        category_id: 1
    },
    {
        product_name: 'Uggs',
        price: 119.99,
        stock: 35,
        category_id: 3
    },
    {
        product_name: 'Beanie',
        price: 8.99,
        stock: 40,
        category_id: 5
    },
    {
        product_name: 'Caset Player',
        price: 39.99,
        stock: 7,
        category_id: 4
    },
    {
        product_name: "Yoga Pants",
        price: 69.99,
        stock: 19,
        category_id: 2
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;