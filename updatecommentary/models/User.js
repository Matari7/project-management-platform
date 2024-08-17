const { DataTypes } = require('sequelize');
const { userDb } = require('../db/connection'); 
// Define the User model
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
  timestamps: false 
});

module.exports = User;
