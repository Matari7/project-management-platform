import React, { useState } from 'react';

const CreateProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4005/api/projects/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description, userId }),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log('Project created:', responseData.project);
                setMessage('Project created successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create project: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Failed to create project: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Create Project</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>User ID</label>
                    <input 
                        type="text" 
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create Project</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateProject;
