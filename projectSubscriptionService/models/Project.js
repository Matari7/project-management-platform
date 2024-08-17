const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../db/connection');
const User = require('./User');

// Define the 'projects' model
const Project = sequelizeProject.define('projects', {

    // Project name field
    name: {
        type: DataTypes.STRING,
        allowNull: false // This field cannot be null
    },
    // Project description field
    description: {
        type: DataTypes.TEXT,
        allowNull: false // This field cannot be null
    },
    // Foreign key to reference the User model
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // This field cannot be null
        references: {
            model: User, // The 'user_id' column references the 'User' model
            key: 'id'   // The foreign key is mapped to the 'id' field of the User model
        }
    }
}, {
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
});

// Export the Project model
module.exports = Project;
