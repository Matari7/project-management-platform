const { DataTypes } = require('sequelize');
const { commentDb }= require('../db/connection');
const User = require('./User');
const Project = require('./Project');

const Commentary = commentDb.define('comments', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
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

module.exports = Commentary;
