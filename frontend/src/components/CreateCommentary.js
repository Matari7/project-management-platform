import React, { useState } from 'react';

const CreateCommentary = () => {
    const [content, setContent] = useState('');
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to create a new commentary
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4009/api/commentaries/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content, projectId, userId }), // Send the commentary data as JSON
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log('Commentary created:', responseData.commentary);
                setMessage('Commentary created successfully!'); // Display success message
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create commentary: ${errorData.message}`); // Display error message
            }
        } catch (error) {
            setMessage(`Error creating commentary: ${error.message}`); // Handle any network or other errors
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
            {message && <p>{message}</p>} {/* Display message if there is any */}
        </form>
    );
};

export default CreateCommentary;
