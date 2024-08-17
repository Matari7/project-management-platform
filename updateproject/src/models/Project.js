const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Defines a Project model for the 'projects' table
const Project = sequelize.define('projects', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false // Disables automatic timestamp columns (createdAt, updatedAt)
});

module.exports = Project;
