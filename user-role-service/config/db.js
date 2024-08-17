const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
require('dotenv').config();

// Set up Sequelize for MySQL database
const sequelize = new Sequelize(process.env.USER_DB_NAME, 
    process.env.USER_DB_USER, 
    process.env.USER_DB_PASSWORD, {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql'
});

// Connect to MongoDB Atlas
const mongoDBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = { sequelize, mongoDBConnection };
