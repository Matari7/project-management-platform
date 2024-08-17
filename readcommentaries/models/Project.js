const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../db/connection'); // Import the Sequelize instance for the project database
const User = require('./User'); // Import the User model

// Define the 'Project' model
const Project = sequelizeProject.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set this field as the primary key
        autoIncrement: true // Automatically increment the value for each new record
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false // This field cannot be null
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false // This field cannot be null
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // This field cannot be null
        references: {
            model: User, // Reference the User model
            key: 'id' // Reference the 'id' field in the User model
        }
    }
});

module.exports = Project;
