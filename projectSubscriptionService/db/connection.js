const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance for the subscription database
const sequelize = new Sequelize(
    process.env.SUBSCRIPTION_DB_NAME,
    process.env.SUBSCRIPTION_DB_USER,
    process.env.SUBSCRIPTION_DB_PASSWORD,
    {
        host: process.env.SUBSCRIPTION_DB_HOST,
        dialect: 'mysql'
    }
);

// Create a Sequelize instance for the project database
const sequelizeProject = new Sequelize(
    process.env.PROJECT_DB_NAME,
    process.env.PROJECT_DB_USER,
    process.env.PROJECT_DB_PASSWORD,
    {
        host: process.env.PROJECT_DB_HOST,
        dialect: 'mysql'
    }
);

// Create a Sequelize instance for the user database
const userDb = new Sequelize(
    process.env.USER_DB_NAME,
    process.env.USER_DB_USER,
    process.env.USER_DB_PASSWORD,
    {
        host: process.env.USER_DB_HOST,
        dialect: 'mysql'
    }
);

// Authenticate and test connection to the subscription database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Authenticate and test connection to the project database
sequelizeProject.authenticate()
    .then(() => console.log('Connection to projects database established successfully.'))
    .catch(err => console.error('Unable to connect to the projects database:', err));

// Export Sequelize instances for use in other parts of the application
module.exports = { sequelize, sequelizeProject, userDb };
