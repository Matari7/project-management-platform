const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../db/connection');
const User = require('./User');

// Define the Project model linked to the projects table in the sequelizeProject database
const Project = sequelizeProject.define('projects', {
    name: {
        type: DataTypes.STRING,
        allowNull: false // The name field is required
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false // The description field is required
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // The user_id field is required
        references: {
            model: User,   // References the User model
            key: 'id'      // Links to the id field in the User model
        }
    }
}, {
    timestamps: false // Disable automatic timestamp fields (createdAt, updatedAt)
});

module.exports = Project;
