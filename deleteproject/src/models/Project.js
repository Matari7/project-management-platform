const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('../../../create-user/src/models/User');

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
    user_id: {  // Aquí se usa `user_id` como la columna que almacena la llave foránea
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User, // La referencia apunta al modelo User en la base de datos de create-user
          key: 'id'
        }
      }
});

module.exports = Project;
