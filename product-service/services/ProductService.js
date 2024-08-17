const Product = require('../models/Product');

// Creates a new product entry in the database
// @param {Object} productData - The product data to be inserted
// @returns {Promise<Object>} - The created product object
const createProduct = async (productData) => {
    return await Product.create(productData);
};

// Retrieves all product entries from the database
// @returns {Promise<Array<Object>>} - An array of all product objects
const getAllProducts = async () => {
    return await Product.findAll();
};

module.exports = {
    createProduct,
    getAllProducts,
};
