const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
    through:
    {
        model: ProductTag,
        unique: false
    },
    foreignKey: 'product_id',
    as: 'tags'
});

Tag.belongsToMany(Product, {
    throught: {
        model: ProductTag,
        unique: false
    },
    foreignKey: 'tag_id',
    as: 'products'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag
};

