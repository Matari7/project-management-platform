const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance for the projects database
const sequelize = new Sequelize(
    process.env.PROJECT_DB_NAME,   // Project database name
    process.env.PROJECT_DB_USER,   // Project database user
    process.env.PROJECT_DB_PASSWORD, // Project database password
    {
        host: process.env.PROJECT_DB_HOST, // Project database host
        dialect: 'mysql'                    // Database dialect (MySQL)
    }
);

// Initialize Sequelize instance for the users database
const sequelizeUser = new Sequelize(
    process.env.USER_DB_NAME,    // User database name
    process.env.USER_DB_USER,    // User database user
    process.env.USER_DB_PASSWORD, // User database password
    {
        host: process.env.USER_DB_HOST, // User database host
        dialect: 'mysql'                 // Database dialect (MySQL)
    }
);

// Authenticate and connect to the projects database
sequelize.authenticate()
    .then(() => console.log('Project database connected...'))
    .catch(err => console.log('Error: ' + err));

// Export the Sequelize instances for use in other parts of the application
module.exports = { sequelize, sequelizeUser };
