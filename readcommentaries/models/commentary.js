const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('../../create-user/src/models/User'); // Asegúrate de que la ruta sea correcta
const Project = require('../../createproject/src/models/Project');


const Commentary = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Project, // La referencia apunta al modelo User en la base de datos de create-user
            key: 'id'
          }
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
        timestamps: true,
        underscored: true, // Esto asegura que Sequelize utilice el formato `snake_case` para los nombres de columnas
        tableName: 'comments', 
});

module.exports = Commentary;