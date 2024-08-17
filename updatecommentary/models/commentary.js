const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User'); // Ensure the path to User model is correct
const Project = require('./Project');

// Define the Commentary model
const Commentary = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Project, // Foreign key reference to Project model
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Foreign key reference to User model
            key: 'id'
        }
    }
}, {
    timestamps: false, // Disable automatic timestamps
});

module.exports = Commentary;
