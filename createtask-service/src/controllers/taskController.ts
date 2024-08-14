import { Request, Response } from 'express';
import Task from '../models/task';

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const newTask = await Task.create({ title, description });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};
