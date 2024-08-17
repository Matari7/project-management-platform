import React, { useState } from 'react';

const CreateProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to create a new project
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4005/api/projects/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description, userId }), // Send the project data as JSON
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log('Project created:', responseData.project);
                setMessage('Project created successfully!'); // Display success message
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create project: ${errorData.message}`); // Display error message
            }
        } catch (error) {
            setMessage(`Failed to create project: ${error.message}`); // Handle any network or other errors
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
            {message && <p>{message}</p>} {/* Display message if there is any */}
        </div>
    );
};

export default CreateProject;
