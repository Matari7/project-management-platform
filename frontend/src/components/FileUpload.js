import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [projectId, setProjectId] = useState('');
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleProjectIdChange = (e) => {
        setProjectId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setMessage('Please select a file');
            return;
        }
        if (!projectId) {
            setMessage('Please enter a project ID');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('project_id', projectId);

        try {
            const response = await axios.post('http://localhost:4000/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(`Error uploading file: ${error.response.data.message}`);
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Project ID:</label>
                    <input 
                        type="text" 
                        value={projectId} 
                        onChange={handleProjectIdChange} 
                        required 
                    />
                </div>
                <div>
                    <label>File:</label>
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        required 
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;
