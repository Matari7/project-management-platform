import React, { useState } from 'react';

const CreateDocument = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4013/api/documents', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, projectId, userId }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Document created:', responseData.document);
                setMessage('Document created successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create document: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Error creating document: ${error.message}`);
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
            {message && <p>{message}</p>}

        </div>
    );
};

export default CreateDocument;
