const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Product model
const Product = sequelize.define('products', {
    // Unique identifier for the product
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Automatically increment the ID for each new product
        primaryKey: true, // Set this field as the primary key
    },
    // Name of the product
    productName: {
        type: DataTypes.STRING,
        allowNull: false, // This field cannot be null
    },
    // Price of the product
    price: {
        type: DataTypes.FLOAT,
        allowNull: false, // This field cannot be null
    },
}, {
    // Disable automatic creation of `createdAt` and `updatedAt` timestamps
    timestamps: false,
});

module.exports = Product;
