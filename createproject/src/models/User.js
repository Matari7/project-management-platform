const { DataTypes } = require('sequelize');
const { sequelizeUser } = require('../config/db'); // Adjust the path to your database configuration file

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
  timestamps: false // Set to true if you want Sequelize to manage createdAt and updatedAt timestamps
});

module.exports = User;
