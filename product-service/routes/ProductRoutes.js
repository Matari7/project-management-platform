const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Route for creating a new product
// HTTP POST request to /products
router.post('/products', productController.createProduct);

// Route for retrieving all products
// HTTP GET request to /products
router.get('/products', productController.getProducts);

module.exports = router;
