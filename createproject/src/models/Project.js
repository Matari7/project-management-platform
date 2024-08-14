const { DataTypes } = require('sequelize');
const { sequelizeProject } = require('../config/db'); // Asegúrate de usar la conexión correcta para projects
const User = require('./User'); // Asegúrate de que la ruta sea correcta

const Project = sequelizeProject.define('projects', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
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
  timestamps: false // Esto activará los campos `createdAt` y `updatedAt`
});

module.exports = Project;
