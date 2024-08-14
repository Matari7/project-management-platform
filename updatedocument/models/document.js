const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User');
const Project = require('./Project');

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
            model: Project,
            key: 'id'
          }
    },
    user_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      }
    }, {
        timestamps: false,
});

module.exports = Document;
