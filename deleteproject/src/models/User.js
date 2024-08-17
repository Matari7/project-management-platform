const { DataTypes } = require('sequelize');
const { sequelizeUser } = require('../config/db'); 

// Define the User model linked to the users table in the sequelizeUser database
const User = sequelizeUser.define('users', {
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
