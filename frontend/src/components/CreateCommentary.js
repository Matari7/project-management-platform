import React, { useState } from 'react';

const CreateCommentary = () => {
    const [content, setContent] = useState('');
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4009/api/commentaries/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content, projectId, userId }),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log('Commentary created:', responseData.commentary);
                setMessage('Commentary created successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create commentary: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Error creating commentary: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Content:</label>
                <input 
                    type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
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
                <label>User ID:</label>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Create Commentary</button>
            {message && <p>{message}</p>}

        </form>
        
    );
};

export default CreateCommentary;
