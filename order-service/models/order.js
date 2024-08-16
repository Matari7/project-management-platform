import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Order = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    orderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: false
});

export default Order;
