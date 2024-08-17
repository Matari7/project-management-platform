const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User'); 
const Project = require('./Project'); 

// Define the 'Commentary' model
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
            model: Project, // Reference to the Project model
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Reference to the User model
            key: 'id'
        }
    }
}, {
    timestamps: true, // Enables automatic creation of `createdAt` and `updatedAt` timestamps
    underscored: true, // Ensures Sequelize uses snake_case for column names
    tableName: 'comments', // Specifies the table name in the database
});

module.exports = Commentary;
