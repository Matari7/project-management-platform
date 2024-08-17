import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

// Define the 'Order' model for the 'orders' table
const Order = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,      // Define 'id' as an integer
        autoIncrement: true,         // Automatically increment the value for new records
        primaryKey: true,            // Set 'id' as the primary key of the table
    },
    orderName: {
        type: DataTypes.STRING,       // Define 'orderName' as a string
        allowNull: false,             // Ensure 'orderName' cannot be null
    },
    totalAmount: {
        type: DataTypes.FLOAT,         // Define 'totalAmount' as a floating-point number
        allowNull: false,             // Ensure 'totalAmount' cannot be null
    }
}, {
    timestamps: false                // Disable automatic timestamp fields ('createdAt' and 'updatedAt')
});

export default Order;
