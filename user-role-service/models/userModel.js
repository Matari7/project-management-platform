const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Defines a User model for the 'users' table
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Auto-incrementing primary key
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false // Username is required
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false // Email is required
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false // Password hash is required
    }
}, {
    tableName: 'users', // Specifies the table name
    timestamps: false // Disables automatic timestamp columns
});

module.exports = User;
