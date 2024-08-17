import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to update a document's details.
 */
const UpdateDocument = () => {
    // State to hold the ID of the document to update
    const [documentId, setDocumentId] = useState('');
    // State to hold the new title for the document
    const [title, setTitle] = useState('');
    // State to hold the new content for the document
    const [content, setContent] = useState('');
    // State to hold messages, including errors and success messages
    const [message, setMessage] = useState('');

    /**
     * Handles the update of a document by making an HTTP PUT request.
     * This function is called when the form is submitted.
     */
    const handleUpdate = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        try {
            // Make an HTTP PUT request to update the document
            const response = await axios.put(`${process.env.REACT_APP_API_URL}:4015/api/documents/${documentId}`, { title, content });
            // Set the success message from the response
            setMessage(response.data.message);
        } catch (error) {
            // Set the error message from the response or default to the error message
            setMessage('Error updating document: ' + (error.response?.data?.message || error.message));
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
