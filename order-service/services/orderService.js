import Order from '../models/order.js';

// Creates a new order using the provided order data
export const createOrder = async (orderData) => {
    try {
        const newOrder = await Order.create(orderData);
        return newOrder;
    } catch (error) {
        throw new Error('Error creating order');
    }
};

// Retrieves all orders from the database
export const getAllOrders = async () => {
    try {
        return await Order.findAll();
    } catch (error) {
        throw new Error('Error fetching orders');
    }
};
