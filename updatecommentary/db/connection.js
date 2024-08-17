const { Sequelize } = require('sequelize');
require('dotenv').config();

// Setup Sequelize instance for the commentary database
const sequelize = new Sequelize(
  process.env.COMMENTARY_DB_NAME, 
  process.env.COMMENTARY_DB_USER, 
  process.env.COMMENTARY_DB_PASSWORD, 
  {
    host: process.env.COMMENTARY_DB_HOST,
    dialect: 'mysql'
  }
);

// Setup Sequelize instance for the project database
const sequelizeProject = new Sequelize(
  process.env.PROJECT_DB_NAME, 
  process.env.PROJECT_DB_USER, 
  process.env.PROJECT_DB_PASSWORD, 
  {
    host: process.env.PROJECT_DB_HOST,
    dialect: 'mysql',
  }
);

// Setup Sequelize instance for the user database
const userDb = new Sequelize(
  process.env.USER_DB_NAME, 
  process.env.USER_DB_USER, 
  process.env.USER_DB_PASSWORD, 
  {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql',
  }
);

// Authenticate connection to the commentary database
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Authenticate connection to the project database
sequelizeProject.authenticate()
  .then(() => console.log('Connection to the projects database established successfully.'))
  .catch(err => console.error('Could not connect to the projects database:', err));

// Authenticate connection to the user database
userDb.authenticate()
  .then(() => console.log('Connection to the users database established successfully.'))
  .catch(err => console.error('Could not connect to the users database:', err));

// Export Sequelize instances
module.exports = { sequelize, sequelizeProject, userDb };
