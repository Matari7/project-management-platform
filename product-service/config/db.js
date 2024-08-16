const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PRODUCT_DB_NAME, process.env.PRODUCT_DB_USER, process.env.PRODUCT_DB_PASSWORD, {
    host: process.env.PRODUCT_DB_HOST,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Connected to products_db'))
    .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
