const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

// Define the User model linked to the user table in the database
const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false // The username field is required
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // The email field is required
    unique: true      // The email field must be unique
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false // The password_hash field is required
  }
}, {
  timestamps: false // Disable automatic timestamp fields (createdAt, updatedAt)
});

module.exports = User;
