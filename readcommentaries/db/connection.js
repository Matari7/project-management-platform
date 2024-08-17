const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance for the 'commentary' database
const sequelize = new Sequelize(
    process.env.COMMENTARY_DB_NAME, 
    process.env.COMMENTARY_DB_USER, 
    process.env.COMMENTARY_DB_PASSWORD, 
    {
        host: process.env.COMMENTARY_DB_HOST,
        dialect: 'mysql'
    }
);

// Initialize Sequelize instance for the 'project' database
const sequelizeProject = new Sequelize(
    process.env.PROJECT_DB_NAME, 
    process.env.PROJECT_DB_USER, 
    process.env.PROJECT_DB_PASSWORD, 
    {
        host: process.env.PROJECT_DB_HOST,
        dialect: 'mysql'
    }
);

// Initialize Sequelize instance for the 'user' database
const userDb = new Sequelize(
    process.env.USER_DB_NAME, 
    process.env.USER_DB_USER, 
    process.env.USER_DB_PASSWORD, 
    {
        host: process.env.USER_DB_HOST,
        dialect: 'mysql'
    }
);

// Test connection to the 'commentary' database
sequelize.authenticate()
    .then(() => console.log('Connected to the commentary database...'))
    .catch(err => console.log('Error connecting to the commentary database: ' + err));

// Test connection to the 'project' database
sequelizeProject.authenticate()
    .then(() => console.log('Successfully connected to the project database.'))
    .catch(err => console.error('Error connecting to the project database:', err));

// Test connection to the 'user' database
userDb.authenticate()
    .then(() => console.log('Successfully connected to the user database.'))
    .catch(err => console.error('Error connecting to the user database:', err));

// Export the Sequelize instances
module.exports = { sequelize, sequelizeProject, userDb };
