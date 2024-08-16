import { createOrder, getAllOrders } from '../services/orderService.js';

export const createOrderHandler = async (req, res) => {
    try {
        const newOrder = await createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrdersHandler = async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
