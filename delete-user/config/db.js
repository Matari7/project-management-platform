const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance to connect to the users database
const sequelize = new Sequelize(
  process.env.USER_DB_NAME,    // Database name
  process.env.USER_DB_USER,    // Database user
  process.env.USER_DB_PASSWORD, // User password
  {
    host: process.env.USER_DB_HOST, // Database host
    dialect: 'mysql'                // Database dialect (MySQL)
  }
);

// Authenticate the connection to the database
sequelize.authenticate()
  .then(() => console.log('Database connected...')) // Log success message if connection is successful
  .catch(err => console.log('Error: ' + err));      // Log error message if connection fails

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
