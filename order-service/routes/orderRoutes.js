import { Router } from 'express';
import { createOrderHandler, getOrdersHandler } from '../controllers/orderController.js';

// Create a new Express Router instance
const router = Router();

// Define route for creating a new order
// Calls the 'createOrderHandler' function when a POST request is made to '/orders'
router.post('/orders', createOrderHandler);

// Define route for retrieving all orders
// Calls the 'getOrdersHandler' function when a GET request is made to '/orders'
router.get('/orders', getOrdersHandler);

// Export the router for use in other modules
export default router;
