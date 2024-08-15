const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('../models/User'); 
const Project = require('../models/Project');


const Subscription = sequelize.define('subscription', {
    user_id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User, 
          key: 'id'
        }
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Project, 
            key: 'id'
          }
    
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'subscriptions'
});

module.exports = Subscription;
