const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance for the commentary database
const sequelize = new Sequelize(
    process.env.COMMENTARY_DB_NAME,     // Database name
    process.env.COMMENTARY_DB_USER,     // Database user
    process.env.COMMENTARY_DB_PASSWORD, // Database password
    {
        host: process.env.COMMENTARY_DB_HOST, // Database host
        dialect: 'mysql'                      // Database dialect (MySQL)
    }
);

module.exports = sequelize;
