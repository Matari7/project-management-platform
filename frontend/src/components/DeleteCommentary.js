import React, { useState } from 'react';
import axios from 'axios';

const DeleteCommentary = () => {
    const [commentaryId, setCommentaryId] = useState('');
    const [message, setMessage] = useState('');


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4010/api/commentaries/delete/${commentaryId}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error deleting commentary: '+ (error.response?.data?.message || error.message));
        }
    };

    return (
            <div>
                <h2>Delete Project</h2>
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
            {message && <p>{message}</p>}

            </div>
    );
};

export default DeleteCommentary;
