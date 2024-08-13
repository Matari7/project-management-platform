const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    }
    }, {
        timestamps: false 
        });

module.exports = Project;
