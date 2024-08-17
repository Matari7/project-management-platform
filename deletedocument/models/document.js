const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User');
const Project = require('./Project');

// Define the Document model linked to the documents table in the database
const Document = sequelize.define('documents', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,      // Marks this field as the primary key
        autoIncrement: true    // Enables auto-incrementing for this field
    },
    document_name: {
        type: DataTypes.STRING,
        allowNull: false       // The document_name field is required
    },
    document_content: {
        type: DataTypes.TEXT,
        allowNull: false       // The document_content field is required
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,      // The project_id field is required
        references: {
            model: Project,    // References the Project model
            key: 'id'          // Links to the id field in the Project model
        }
    },
    user_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,      // The user_id field is required
        references: {
            model: User,       // References the User model
            key: 'id'          // Links to the id field in the User model
        }
    }
});

module.exports = Document;
