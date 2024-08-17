const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

// Define the Project model linked to the projects table in the database
const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,      // Marks this field as the primary key
        autoIncrement: true    // Enables auto-incrementing for this field
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false       // The name field is required
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false       // The description field is required
    },
    user_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,      // The user_id field is required
        references: {
          model: User,         // References the User model
          key: 'id'            // Links to the id field in the User model
        }
    }
});

module.exports = Project;
