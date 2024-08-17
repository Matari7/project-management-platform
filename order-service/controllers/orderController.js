import { createOrder, getAllOrders } from '../services/orderService.js';

// Handler for creating a new order
export const createOrderHandler = async (req, res) => {
    try {
        // Call the service function to create a new order with the request body data
        const newOrder = await createOrder(req.body);
        // Respond with a 201 status code and the newly created order
        res.status(201).json(newOrder);
    } catch (error) {
        // Respond with a 500 status code and the error message in case of failure
        res.status(500).json({ message: error.message });
    }
};

// Handler for retrieving all orders
export const getOrdersHandler = async (req, res) => {
    try {
        // Call the service function to get all orders
        const orders = await getAllOrders();
        // Respond with a 200 status code and the list of orders
        res.status(200).json(orders);
    } catch (error) {
        // Respond with a 500 status code and the error message in case of failure
        res.status(500).json({ message: error.message });
    }
};
