const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instances for different databases
const sequelize = new Sequelize(process.env.DOCUMENT_DB_NAME, process.env.DOCUMENT_DB_USER, process.env.DOCUMENT_DB_PASSWORD, {
    host: process.env.DOCUMENT_DB_HOST,
    dialect: 'mysql'
});

const sequelizeProject = new Sequelize(process.env.PROJECT_DB_NAME, process.env.PROJECT_DB_USER, process.env.PROJECT_DB_PASSWORD, {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql',
});

// Initialize Sequelize instance for the 'users' database
const userDb = new Sequelize(process.env.USER_DB_NAME, process.env.USER_DB_USER, process.env.USER_DB_PASSWORD, {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql',
});

// Test connection to the 'documents' database
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the documents database successfully.');
    })
    .catch(err => {
        console.error('Failed to connect to the documents database:', err);
    });

// Test connection to the 'projects' database
sequelizeProject.authenticate()
    .then(() => {
        console.log('Connected to the projects database successfully.');
    })
    .catch(err => {
        console.error('Failed to connect to the projects database:', err);
    });

// Test connection to the 'users' database
userDb.authenticate()
    .then(() => {
        console.log('Connected to the users database successfully.');
    })
    .catch(err => {
        console.error('Failed to connect to the users database:', err);
    });

module.exports = { sequelize, sequelizeProject, userDb };
