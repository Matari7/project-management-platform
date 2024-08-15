import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadTask = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:4025/api/tasks');
                setTasks(response.data.tasks || []);
                setMessage('Tasks retrieved successfully');
            } catch (error) {
                setMessage(`Error fetching tasks: ${error.message}`);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Read Tasks</h2>
            {message && <p>{message}</p>}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <small>Status: {task.status}</small><br />
                        <small>Created at: {task.createdAt}</small><br />
                        <small>Updated at: {task.updatedAt}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadTask;
