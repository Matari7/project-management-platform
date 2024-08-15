const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = require('./User');

const Project = sequelize.define('projects', {
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
          model: User, 
          key: 'id'
        }
      }
});

module.exports = Project;
