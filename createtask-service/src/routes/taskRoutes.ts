import { Router } from 'express';
import { createTask } from '../controllers/taskController';

const router = Router();

// Route to handle creating a new task
router.post('/tasks', createTask);

export default router;
