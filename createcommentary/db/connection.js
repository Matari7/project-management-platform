const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance for the projects database
const sequelizeProject = new Sequelize(
    process.env.PROJECT_DB_NAME, 
    process.env.PROJECT_DB_USER, 
    process.env.PROJECT_DB_PASSWORD, 
    {
        host: process.env.PROJECT_DB_HOST,
        dialect: 'mysql',
    }
);

// Initialize Sequelize instance for the users database
const userDb = new Sequelize(
    process.env.USER_DB_NAME, 
    process.env.USER_DB_USER, 
    process.env.USER_DB_PASSWORD, 
    {
        host: process.env.USER_DB_HOST,
        dialect: 'mysql',
    }
);

// Initialize Sequelize instance for the commentaries database
const commentDb = new Sequelize(
    process.env.COMMENTARY_DB_NAME, 
    process.env.COMMENTARY_DB_USER, 
    process.env.COMMENTARY_DB_PASSWORD, 
    {
        host: process.env.COMMENTARY_DB_HOST,
        dialect: 'mysql',
    }
);

// Authenticate and connect to the projects database
sequelizeProject.authenticate()
    .then(() => {
        console.log('Connected to the projects database successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the projects database:', err);
    });

// Authenticate and connect to the users database
userDb.authenticate()
    .then(() => {
        console.log('Connected to the users database successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the users database:', err);
    });

// Authenticate and connect to the commentaries database
commentDb.authenticate()
    .then(() => {
        console.log('Connected to the commentaries database successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the commentaries database:', err);
    });

// Exporting the Sequelize instances for use in other parts of the application
module.exports = { sequelizeProject, userDb, commentDb };
