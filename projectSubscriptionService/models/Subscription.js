const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./User');
const Project = require('./Project');

// Define the 'subscription' model
const Subscription = sequelize.define('subscription', {
    
    // Foreign key to reference the User model
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // This field cannot be null
        references: {
            model: User, // The 'user_id' column references the 'User' model
            key: 'id'   // The foreign key is mapped to the 'id' field of the User model
        }
    },
    
    // Foreign key to reference the Project model
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // This field cannot be null
        references: {
            model: Project, // The 'project_id' column references the 'Project' model
            key: 'id'   // The foreign key is mapped to the 'id' field of the Project model
        }
    },
    
    // Timestamp for when the subscription was created
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Default value is the current date and time
    }
}, {
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
    tableName: 'subscriptions' // Specifies the name of the table in the database
});

// Export the Subscription model
module.exports = Subscription;
