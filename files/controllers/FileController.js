import { uploadFile, getAllFiles } from '../services/fileService.js';
import path from 'path';

// Handler function to handle file upload requests
export const uploadFileHandler = async (req, res) => {
    try {
        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Construct file data from the uploaded file
        const fileData = {
            fileName: req.file.originalname,  // Original file name
            fileType: req.file.mimetype,      // MIME type of the file
            fileSize: req.file.size,          // Size of the file in bytes
            filePath: path.join('uploads', req.file.filename), // Path where the file is stored
        };

        // Save the file data using the uploadFile service
        const newFile = await uploadFile(fileData);
        res.status(201).json(newFile);  // Respond with the newly uploaded file data
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle any errors during the file upload process
    }
};

// Handler function to retrieve all files
export const getFilesHandler = async (req, res) => {
    try {
        const files = await getAllFiles();  // Fetch all files using the getAllFiles service
        res.status(200).json(files);  // Respond with the list of all files
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle any errors during the file retrieval process
    }
};
