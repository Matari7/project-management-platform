import React, { useState } from 'react';

const CreateDocument = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to create a new document
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4013/api/documents`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, projectId, userId }), // Send the document data as JSON
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Document created:', responseData.document);
                setMessage('Document created successfully!'); // Display success message
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create document: ${errorData.message}`); // Display error message
            }
        } catch (error) {
            setMessage(`Error creating document: ${error.message}`); // Handle any network or other errors
        }
    };

    return (
        <div>
            <h2>Create Document</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea 
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
                <button type="submit">Create Document</button>
            </form>
            {message && <p>{message}</p>} {/* Display message if there is any */}
        </div>
    );
};

export default CreateDocument;
