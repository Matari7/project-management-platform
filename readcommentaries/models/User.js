const { DataTypes } = require('sequelize');
const { userDb } = require('../db/connection'); // Import the Sequelize instance for the user database

// Define the 'User' model
const User = userDb.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false // This field cannot be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // This field cannot be null
    unique: true // Ensure that email addresses are unique across all users
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false // This field cannot be null
  }
}, {
  timestamps: false // Set to false to disable automatic timestamps (createdAt and updatedAt). Set to true if you want these fields.
});

module.exports = User;
