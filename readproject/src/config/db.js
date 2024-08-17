const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize with database credentials from environment variables
const sequelize = new Sequelize(process.env.PROJECT_DB_NAME, 
    process.env.PROJECT_DB_USER, 
    process.env.PROJECT_DB_PASSWORD, {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql', // Using MySQL as the database dialect
});

// Authenticate the connection to the database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Export the Sequelize instance for use in other modules
module.exports = sequelize;
