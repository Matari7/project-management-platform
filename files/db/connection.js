import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from a .env file

// Initialize Sequelize instance for the file database
const sequelize = new Sequelize(
    process.env.FILE_DB_NAME,     // Database name
    process.env.FILE_DB_USER,     // Database user
    process.env.FILE_DB_PASSWORD, // Database password
    {
        host: process.env.FILE_DB_HOST, // Database host
        dialect: 'mysql',               // Database dialect (MySQL)
    }
);

// Authenticate and connect to the database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err)); // Handle connection errors

export default sequelize;
