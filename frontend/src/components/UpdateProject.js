import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to update a project's details.
 */
const UpdateProject = () => {
    // State to hold the ID of the project to update
    const [projectId, setProjectId] = useState('');
    // State to hold the new name for the project
    const [name, setName] = useState('');
    // State to hold the new description for the project
    const [description, setDescription] = useState('');
    // State to hold messages, including errors and success messages
    const [message, setMessage] = useState('');

    /**
     * Handles the update of a project by making an HTTP PUT request.
     * This function is called when the user clicks the update button.
     */
    const handleUpdate = async () => {
        try {
            // Make an HTTP PUT request to update the project
            const response = await axios.put(`${process.env.REACT_APP_API_URL}:4007/api/projects/update/${projectId}`, { name, description });
            // Set the success message from the response
            setMessage(response.data.message);
        } catch (error) {
            // Set the error message from the response or default to the error message
            setMessage('Error updating project: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Update Project</h2>
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={handleUpdate}>Update Project</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateProject;
