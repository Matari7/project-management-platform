import React, { useState } from 'react';
import axios from 'axios';

const DeleteProject = () => {
    const [projectId, setProjectId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4006/api/projects/delete/${projectId}`);
            setMessage('Deleted document successfully: '+ response.data.message);
        } catch (error) {
            setMessage('Error deleting project: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Delete Project</h2>
            <div>
                <label>Project ID</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={handleDelete}>Delete Project</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteProject;
