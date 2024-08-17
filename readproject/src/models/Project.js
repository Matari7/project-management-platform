const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the 'projects' model
const Project = sequelize.define('projects', {
    name: {
        type: DataTypes.STRING, // Data type for the project name
        allowNull: false, // Name is required
    },
    description: {
        type: DataTypes.STRING, // Data type for the project description
        allowNull: false, // Description is required
    },
    user_id: {
        type: DataTypes.INTEGER, // Data type for the user ID
        allowNull: false, // User ID is required
    },
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = Project;
