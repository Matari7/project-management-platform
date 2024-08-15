import React, { useState } from 'react';
import axios from 'axios';

const UpdateDocument = () => {
    const [documentId, setDocumentId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');


    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}:4015/api/documents/${documentId}`, { title, content });
            setMessage(response.data.message);
        } catch (error) {
            setMessage ('Error updating document: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Update Document</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Document ID:</label>
                    <input 
                        type="text" 
                        value={documentId} 
                        onChange={(e) => setDocumentId(e.target.value)} 
                        required 
                    />
                </div>
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
                <button type="submit">Update Document</button>
            </form>
            {message && <p>{message}</p>}

        </div>
    );
};

export default UpdateDocument;
