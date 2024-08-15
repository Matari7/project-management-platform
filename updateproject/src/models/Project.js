const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Project = sequelize.define('projects', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    }, {
        timestamps: false 
        });

module.exports = Project;
