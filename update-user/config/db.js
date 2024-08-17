const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance for connecting to the database
const sequelize = new Sequelize(
  process.env.USER_DB_NAME,       // Database name
  process.env.USER_DB_USER,       // Database user
  process.env.USER_DB_PASSWORD,   // Database password
  {
    host: process.env.USER_DB_HOST,  // Database host
    dialect: 'mysql'                 // Database dialect
  }
);

// Authenticate and connect to the database
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
