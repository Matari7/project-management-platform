import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to handle the deletion of a document.
 */
const DeleteDocument = () => {
    // State to store the document ID input by the user
    const [documentId, setDocumentId] = useState('');
    // State to store and display messages to the user
    const [message, setMessage] = useState('');

    /**
     * Handles the document deletion process.
     * Sends a DELETE request to the server and updates the message state based on the response.
     */
    const handleDelete = async () => {
        try {
            // Sends a DELETE request to the API with the document ID
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}:4014/api/documents/${documentId}`);
            // Updates the message state with a success message
            setMessage('Deleted document successfully: ' + response.data.message);
        } catch (error) {
            // Updates the message state with an error message
            setMessage('Error deleting document: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Delete Document</h2>
            {/* Form to input document ID and trigger the deletion */}
            <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }}>
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
            {/* Display message if there is any */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteDocument;
