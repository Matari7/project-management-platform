import { Router } from 'express';
import multer from 'multer';
import { uploadFileHandler, getFilesHandler } from '../controllers/FileController.js';

const router = Router();

// Set up Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory where files should be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Create a unique filename with a timestamp
    }
});

const upload = multer({ storage }); // Initialize Multer with the storage configuration

// Route to handle file uploads
router.post('/files/upload', upload.single('file'), uploadFileHandler);

// Route to handle retrieving all files
router.get('/files', getFilesHandler);

export default router;
