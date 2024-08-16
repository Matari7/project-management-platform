import { Router } from 'express';
import { createOrderHandler, getOrdersHandler } from '../controllers/orderController.js';

const router = Router();

router.post('/orders', createOrderHandler);
router.get('/orders', getOrdersHandler);

export default router;
