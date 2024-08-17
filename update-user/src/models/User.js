const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

// Define the 'User' model
const User = sequelize.define('users', {
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
  timestamps: false // Disable automatic timestamp fields
});

module.exports = User;
