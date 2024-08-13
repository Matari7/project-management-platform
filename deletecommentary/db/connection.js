const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.COMMENTARY_DB_NAME, 
    process.env.COMMENTARY_DB_USER, 
    process.env.COMMENTARY_DB_PASSWORD, {
    host: process.env.COMMENTARY_DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;
