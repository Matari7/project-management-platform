import React, { useState } from 'react';
import axios from 'axios';

const DeleteProject = () => {
    const [projectId, setProjectId] = useState(''); // State to hold the project ID to be deleted
    const [message, setMessage] = useState(''); // State to hold messages (success or error)

    // Handle the delete action
    const handleDelete = async () => {
        try {
            // Send a DELETE request to delete the project by ID
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}:4006/api/projects/delete/${projectId}`);
            setMessage('Deleted project successfully: ' + response.data.message); // Display success message
        } catch (error) {
            setMessage('Error deleting project: ' + (error.response?.data?.message || error.message)); // Display error message
        }
    };

    return (
        <div>
            <h2>Delete Project</h2>
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={handleDelete}>Delete Project</button>
            {message && <p>{message}</p>} {/* Display feedback message */}
        </div>
    );
};

export default DeleteProject;
