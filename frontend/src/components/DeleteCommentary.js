import React, { useState } from 'react';
import axios from 'axios';

const DeleteCommentary = () => {
    const [commentaryId, setCommentaryId] = useState('');
    const [message, setMessage] = useState('');

    // Handle the delete action
    const handleDelete = async () => {
        try {
            // Send a DELETE request to delete the commentary by ID
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}:4010/api/commentaries/delete/${commentaryId}`);
            setMessage(response.data.message); // Display success message
        } catch (error) {
            setMessage('Error deleting commentary: ' + (error.response?.data?.message || error.message)); // Display error message
        }
    };

    return (
        <div>
            <h2>Delete Commentary</h2>
            <div>
                <label>Commentary ID:</label>
                <input 
                    type="text" 
                    value={commentaryId} 
                    onChange={(e) => setCommentaryId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={handleDelete}>Delete Commentary</button>
            {message && <p>{message}</p>} {/* Display message if there is any */}
        </div>
    );
};

export default DeleteCommentary;
