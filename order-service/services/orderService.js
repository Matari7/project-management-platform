import Order from '../models/order.js';

export const createOrder = async (orderData) => {
    try {
        const newOrder = await Order.create(orderData);
        return newOrder;
    } catch (error) {
        throw new Error('Error creating order');
    }
};

export const getAllOrders = async () => {
    try {
        return await Order.findAll();
    } catch (error) {
        throw new Error('Error fetching orders');
    }
};
