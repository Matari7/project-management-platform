import { Request, Response } from 'express';
import Task from '../models/task';

// Controller function to handle the creation of a new task
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        // Create a new task with the provided title and description
        const newTask = await Task.create({ title, description });
        // Send the created task in the response with a 201 status code
        res.status(201).json(newTask);
    } catch (error) {
        // Handle any errors during task creation and send a 500 status code with an error message
        res.status(500).json({ message: 'Error creating task', error });
    }
};
