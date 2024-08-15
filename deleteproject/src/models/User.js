const { DataTypes } = require('sequelize');
const { sequelizeUser } = require('../config/db'); 

const User = sequelizeUser.define('users', {
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
