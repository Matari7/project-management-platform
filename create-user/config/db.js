// Importing the Sequelize library, which is an ORM (Object-Relational Mapper) for Node.js
const { Sequelize } = require('sequelize');

// Loading environment variables from a .env file into process.env
require('dotenv').config();

// Initializing a new Sequelize instance to connect to the MySQL database
// The connection parameters are retrieved from environment variables
const sequelize = new Sequelize(
  process.env.USER_DB_NAME,      // The name of the database
  process.env.USER_DB_USER,      // The database user
  process.env.USER_DB_PASSWORD,  // The password for the database user
  {
    host: process.env.USER_DB_HOST, // The host where the database server is running
    dialect: 'mysql'                // The type of database, in this case, MySQL
  }
);

// Testing the database connection by authenticating with the provided credentials
sequelize.authenticate()
  .then(() => console.log('Database connected...')) // Logs a success message if the connection is established
  .catch(err => console.log('Error: ' + err));      // Logs an error message if the connection fails

// Exporting the sequelize instance for use in other parts of the application
module.exports = sequelize;
