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
    user_id: {  // Aquí se usa `user_id` como la columna que almacena la llave foránea
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // La referencia apunta al modelo User en la base de datos de create-user
            key: 'id'
        }
    }
}, {
    timestamps: false,
});

module.exports = Project;
