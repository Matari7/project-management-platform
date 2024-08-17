import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Create a new Sequelize instance to connect to the MySQL database
const sequelize = new Sequelize(process.env.ORDER_DB_NAME, process.env.ORDER_DB_USER, process.env.ORDER_DB_PASSWORD, {
    host: process.env.ORDER_DB_HOST,  // Database host address
    dialect: 'mysql',  // Dialect for the database (MySQL in this case)
});

// Authenticate the connection to the database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))  // Log a success message if connection is successful
    .catch(err => console.log('Error: ' + err));  // Log an error message if connection fails

export default sequelize;
