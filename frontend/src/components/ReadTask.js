import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Component to fetch and display tasks from an API.
 */
const ReadTask = () => {
    // State to hold the list of tasks and messages
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');

    /**
     * Fetch tasks from the API when the component mounts.
     */
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Make an HTTP GET request to fetch tasks
                const response = await axios.get(`${process.env.REACT_APP_API_URL}:4025/api/tasks`);
                // Set tasks data to state and update message
                setTasks(response.data.tasks || []);
                setMessage('Tasks retrieved successfully');
            } catch (error) {
                // Handle error and update message
                setMessage(`Error fetching tasks: ${error.message}`);
            }
        };

        fetchTasks();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h2>Read Tasks</h2>
            {message && <p>{message}</p>}
            <ul>
                {/* Map through tasks and display each one */}
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
