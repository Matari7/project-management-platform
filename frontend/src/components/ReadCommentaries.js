import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to read and display commentaries for a specific project.
 */
const ReadCommentaries = () => {
    // State to store the project ID, list of commentaries, and message
    const [projectId, setProjectId] = useState('');
    const [commentaries, setCommentaries] = useState([]);
    const [message, setMessage] = useState('');

    /**
     * Fetches commentaries for the given project ID.
     * Sends a GET request to the server to retrieve commentaries.
     * Updates the state with retrieved data or an error message.
     */
    const fetchCommentaries = async () => {
        if (!projectId) {
            setMessage('Please enter a Project ID');
            return;
        }

        try {
            // Sends a GET request to fetch commentaries for the project
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4012/api/commentaries/${projectId}`);
            if (response.data.length === 0) {
                setMessage('No commentaries found for this project');
                setCommentaries([]);
            } else {
                setCommentaries(response.data);
                setMessage('Commentaries retrieved successfully');
            }
        } catch (error) {
            // Updates the message state with an error message and clears commentaries
            setMessage(`Error fetching commentaries: ${error.message}`);
            setCommentaries([]);
        }
    };

    return (
        <div>
            <h2>Read Commentaries</h2>
            {/* Input field for entering Project ID */}
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            {/* Button to fetch commentaries */}
            <button onClick={fetchCommentaries}>Fetch Commentaries</button>
            {/* Display message if there is any */}
            {message && <p>{message}</p>}
            {/* List of commentaries */}
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
