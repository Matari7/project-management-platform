const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../db/connection');
const User = require('./User');

const Project = sequelizeProject.define('projects', {
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
}, {
    timestamps: false
});

module.exports = Project;
