const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Product;
