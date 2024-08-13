import React, { useState } from 'react';
import axios from 'axios';

const ReadDocument = () => {
    const [projectId, setProjectId] = useState('');
    const [userId, setUserId] = useState('');
    const [documents, setDocuments] = useState([]);
    const [message, setMessage] = useState('');

    const fetchDocuments = async () => {
        try {
            const response = await axios.post('http://localhost:4016/api/documents', { projectId, userId });
            if (response.data.documents) {
                setDocuments(response.data.documents);
                setMessage('Documents retrieved successfully');
            } else {
                setMessage('No documents found');
            }
        } catch (error) {
            setMessage(`Error fetching documents: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Read Documents</h2>
            <div>
                <label>Project ID:</label>
                <input 
                    type="text" 
                    value={projectId} 
                    onChange={(e) => setProjectId(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>User ID:</label>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                    required 
                />
            </div>
            <button onClick={fetchDocuments}>Fetch Documents</button>
            {message && <p>{message}</p>}
            <ul>
                {documents.map(document => (
                    <li key={document.id}>
                        <h3>{document.document_name} (User ID: {document.user_id})</h3>
                        <p>{document.document_content}</p>
                        <small>Created at: {document.createdAt}</small><br />
                        <small>Updated at: {document.updatedAt}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadDocument;
