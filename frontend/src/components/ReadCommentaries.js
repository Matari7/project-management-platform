import React, { useState } from 'react';
import axios from 'axios';

const ReadCommentaries = () => {
    const [projectId, setProjectId] = useState('');
    const [commentaries, setCommentaries] = useState([]);
    const [message, setMessage] = useState('');

    const fetchCommentaries = async () => {
        if (!projectId) {
            setMessage('Please enter a Project ID');
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4012/api/commentaries/${projectId}`);
            if (response.data.length === 0) {
                setMessage('No commentaries found for this project');
                setCommentaries([]);
            } else {
                setCommentaries(response.data);
                setMessage('Commentaries retrieved successfully');
            }
        } catch (error) {
            setMessage(`Error fetching commentaries: ${error.message}`);
            setCommentaries([]);
        }
    };

    return (
        <div>
            <h2>Read Commentaries</h2>
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={fetchCommentaries}>Fetch Commentaries</button>
            {message && <p>{message}</p>}
            <ul>
                {commentaries.map(commentary => (
                    <li key={commentary.id}>
                        {commentary.comment} (User ID: {commentary.user_id}) (Created at: {commentary.createdAt}) (Updated at: {commentary.updatedAt})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadCommentaries;
