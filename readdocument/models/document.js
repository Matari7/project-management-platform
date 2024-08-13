const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('../../create-user/src/models/User');
const Project = require('../../createproject/src/models/Project');

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
        timestamps: true,
        underscored: true, // Esto asegura que Sequelize utilice el formato `snake_case` para los nombres de columnas
        tableName: 'documents', 
});

module.exports = Document;
