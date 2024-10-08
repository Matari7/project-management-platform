import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to create a new task
            const response = await axios.post(`${process.env.REACT_APP_API_URL}:4024/api/tasks`, { title, description });
            setMessage('Task created successfully: ' + response); // Display success message
        } catch (error) {
            setMessage('Error creating task: ' + (error.response?.data?.message || error.message)); // Display error message
        }
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Create Task</button>
            </form>
            {message && <p>{message}</p>} {/* Display message if there is any */}
        </div>
    );
};

export default CreateTask;
