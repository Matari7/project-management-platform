const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('../../create-user/src/models/User'); // Asegúrate de que la ruta sea correcta
const Project = require('../../createproject/src/models/Project');


const Subscription = sequelize.define('subscription', {
    user_id: {  // Aquí se usa `user_id` como la columna que almacena la llave foránea
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User, // La referencia apunta al modelo User en la base de datos de create-user
          key: 'id'
        }
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Project, // La referencia apunta al modelo User en la base de datos de create-user
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
