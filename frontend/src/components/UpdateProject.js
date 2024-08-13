import React, { useState } from 'react';
import axios from 'axios';

const UpdateProject = () => {
    const [projectId, setProjectId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:4007/api/projects/update/${projectId}`, { name, description });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error updating project: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Update Project</h2>
            <div>
                <label>Project ID</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Description</label>
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
