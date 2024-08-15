import React, { useState } from 'react';
import axios from 'axios';

const DeleteDocument = () => {
    const [documentId, setDocumentId] = useState('');
    const [message, setMessage] = useState('');


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}:4014/api/documents/${documentId}`);
            setMessage('Deleted document successfully: '+ response.data.message);
        } catch (error) {
            setMessage('Error deleting document: '+ (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Delete Document</h2>
            <form onSubmit={handleDelete}>
                <div>
                    <label>Document ID:</label>
                    <input 
                        type="text" 
                        value={documentId} 
                        onChange={(e) => setDocumentId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Delete Document</button>
            </form>
            {message && <p>{message}</p>}

        </div>
    );
};

export default DeleteDocument;
