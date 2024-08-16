import { uploadFile, getAllFiles } from '../services/fileService.js';
import path from 'path';

export const uploadFileHandler = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const fileData = {
            fileName: req.file.originalname,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            filePath: path.join('uploads', req.file.filename),
        };

        const newFile = await uploadFile(fileData);
        res.status(201).json(newFile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getFilesHandler = async (req, res) => {
    try {
        const files = await getAllFiles();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
