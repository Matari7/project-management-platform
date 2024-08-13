import React, { useState } from 'react';
import axios from 'axios';

const UpdateCommentary = () => {
    const [commentaryId, setCommentaryId] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:4011/api/commentaries/update/${commentaryId}`, { content });
            setMessage(response.data.message);
        } catch (error) {
            setMessage ('Error updating commentary: ' + (error.response?.data?.message || error.message));
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
