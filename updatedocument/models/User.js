const { DataTypes } = require('sequelize');
const { userDb } = require('../db/connection'); // Ajusta la ruta a tu archivo de configuración de la base de datos

const User = userDb.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // o true si quieres timestamps
});

module.exports = User;
