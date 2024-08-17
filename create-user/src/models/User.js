const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Adjust the path to your database configuration file

// Define the User model with fields for username, email, and password_hash
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
  timestamps: false // Set to true if you want Sequelize to manage createdAt and updatedAt timestamps
});

module.exports = User;
