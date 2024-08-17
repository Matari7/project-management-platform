const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../db/connection');
const User = require('./User');

// Define the Project model
const Project = sequelizeProject.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Foreign key reference to User model
            key: 'id'
        }
    }
});

module.exports = Project;
