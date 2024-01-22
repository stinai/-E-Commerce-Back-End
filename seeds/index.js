const seedCategories = require('./category');
const seedPRoductTags = require('./product-tag');
const seedProducts = require('./product');
const seedTags = require('./tag');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced!');
    await seedCategories();
    console.log('Categories Seeded!');

    await seedProducts();
    console.log('Products Seeded!');

    await seedTags();
    console.log('Tags Seeded!');

    await seedPRoductTags();
    console.log('Product Tags Seeds!');

    process.exit(0);
};

seedAll();