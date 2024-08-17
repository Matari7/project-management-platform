const { DataTypes } = require('sequelize');
const { userDb } = require('../db/connection'); // Import the configured Sequelize instance for the user database

// Define the 'users' model
const User = userDb.define('users', {
  
  // Username of the user
  username: {
    type: DataTypes.STRING, // Data type is STRING
    allowNull: false // This field cannot be null
  },
  
  // Email of the user
  email: {
    type: DataTypes.STRING, // Data type is STRING
    allowNull: false, // This field cannot be null
    unique: true // Email must be unique across all users
  },
  
  // Hashed password of the user
  password_hash: {
    type: DataTypes.STRING, // Data type is STRING
    allowNull: false // This field cannot be null
  }
}, {
  timestamps: false // Disables automatic creation of 'createdAt' and 'updatedAt' fields
});

// Export the User model
module.exports = User;
