import { Router } from 'express';
import multer from 'multer';
import { uploadFileHandler, getFilesHandler } from '../controllers/FileController.js';

const router = Router();

// Set up Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/files/upload', upload.single('file'), uploadFileHandler);
router.get('/files', getFilesHandler);

export default router;
