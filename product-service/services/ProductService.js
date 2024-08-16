const Product = require('../models/Product');

const createProduct = async (productData) => {
    return await Product.create(productData);
};

const getAllProducts = async () => {
    return await Product.findAll();
};

module.exports = {
    createProduct,
    getAllProducts,
};
