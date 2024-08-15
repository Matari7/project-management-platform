import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ReadCommentaries = () => {
    const [projectId, setProjectId] = useState('');
    const [commentaries, setCommentaries] = useState([]);
    const [message, setMessage] = useState('');


    const fetchCommentaries = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4012/api/commentaries/${projectId}`);
            setCommentaries(response.data);
        } catch (error) {
            setMessage(`Error fetching commentaries: ${error.message}`);
        }
    }, [projectId]);  // Dependencia de projectId

    useEffect(() => {
        if (projectId) {
            fetchCommentaries();
        }
    }, [projectId, fetchCommentaries]);  // Incluye fetchCommentaries como dependencia

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
            <ul>
                {commentaries.map(commentary => (
                    <li key={commentary.id}>
                        {commentary.comment} (User ID: {commentary.user_id})
                        (Created at: {commentary.createdAt})  (UpdatedAt: {commentary.updatedAt})

                    </li>
                ))}
            </ul>
            {message && <p>{message}</p>}

        </div>
    );
};

export default ReadCommentaries;
