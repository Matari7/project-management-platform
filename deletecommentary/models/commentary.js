const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

// Define the Commentary model linked to the comments table in the database
const Commentary = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,      // Marks this field as the primary key
        autoIncrement: true    // Enables auto-incrementing for this field
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false       // The content field is required
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false       // The projectId field is required
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false       // The userId field is required
    }
});

module.exports = Commentary;
