import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to update a commentary.
 */
const UpdateCommentary = () => {
    // State to hold the ID of the commentary to update
    const [commentaryId, setCommentaryId] = useState('');
    // State to hold the new content for the commentary
    const [content, setContent] = useState('');
    // State to hold messages, including errors and success messages
    const [message, setMessage] = useState('');

    /**
     * Handles the update of a commentary by making an HTTP PUT request.
     */
    const handleUpdate = async () => {
        try {
            // Make an HTTP PUT request to update the commentary
            const response = await axios.put(`${process.env.REACT_APP_API_URL}:4011/api/commentaries/update/${commentaryId}`, { content });
            // Set the success message from the response
            setMessage(response.data.message);
        } catch (error) {
            // Set the error message from the response or default to the error message
            setMessage('Error updating commentary: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Update Commentary</h2>
            <div>
                <label>Commentary ID:</label>
                <input 
                    type="text" 
                    value={commentaryId} 
                    onChange={(e) => setCommentaryId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>New Content:</label>
                <input 
                    type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={handleUpdate}>Update Commentary</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateCommentary;
