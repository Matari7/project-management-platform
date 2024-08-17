import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component to handle file upload.
 */
const FileUpload = () => {
    // State to store the selected file
    const [file, setFile] = useState(null);
    // State to store and display messages to the user
    const [message, setMessage] = useState('');

    /**
     * Handles file input change event.
     * Updates the file state with the selected file.
     * 
     * @param {Event} e - The file input change event
     */
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    /**
     * Handles file upload process.
     * Sends a POST request to the server to upload the selected file.
     */
    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            // Sends a POST request to the API to upload the file
            await axios.post(`${process.env.REACT_APP_API_URL}:4028/api/files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Updates the message state with a success message
            setMessage('File uploaded successfully');
        } catch (err) {
            // Logs the error and updates the message state with an error message
            console.error(err);
            setMessage('File upload failed');
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            {/* Input to select a file */}
            <input type="file" onChange={onFileChange} />
            {/* Button to trigger file upload */}
            <button onClick={onFileUpload}>Upload</button>
            {/* Display message if there is any */}
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
