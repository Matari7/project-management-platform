import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}:4027/api/files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('File uploaded successfully');
            fetchFiles();
        } catch (error) {
            setMessage(`Error uploading file: ${error.message}`);
        }
    };

    const fetchFiles = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4027/api/files`);
            setFiles(response.data);
            setMessage('Files retrieved successfully');
        } catch (error) {
            setMessage(`Error fetching files: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>File Upload Service</h2>
            <div>
                <label>Choose a file:</label>
                <input type="file" onChange={handleFileChange} />
            </div>
            <button onClick={uploadFile}>Upload File</button>
            <button onClick={fetchFiles}>Fetch Files</button>
            {message && <p>{message}</p>}
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <h3>{file.fileName}</h3>
                        <p>Type: {file.fileType}</p>
                        <p>Size: {file.fileSize} bytes</p>
                        <p><a href={`${process.env.REACT_APP_API_CENTOS}:4028/${file.filePath}`} target="_blank" rel="noopener noreferrer">Download</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileUpload;
