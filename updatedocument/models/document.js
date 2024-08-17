const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User');
const Project = require('./Project');

// Define the 'documents' model
const Document = sequelize.define('documents', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    document_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    document_content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Project, // Foreign key reference to the 'projects' model
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Foreign key reference to the 'users' model
            key: 'id'
        }
    }
}, {
    timestamps: false, // Disables automatic timestamps
});

module.exports = Document;
