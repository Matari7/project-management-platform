const { DataTypes } = require('sequelize');
const { commentDb } = require('../db/connection');
const User = require('./User');
const Project = require('./Project');

// Define the Commentary model linked to the comments table in the commentDb database
const Commentary = commentDb.define('comments', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false, // The comment field is required
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // The project_id field is required
        references: {
            model: Project, // References the Project model
            key: 'id'       // Links to the id field in the Project model
        }
    },
    user_id: {  
        type: DataTypes.INTEGER,
        allowNull: false, // The user_id field is required
        references: {
            model: User, // References the User model
            key: 'id'    // Links to the id field in the User model
        }
    }
}, {
    timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
});

module.exports = Commentary;
