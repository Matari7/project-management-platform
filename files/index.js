import express from 'express';
import cors from 'cors';
import fileRoutes from './routes/fileRoutes.js';
import sequelize from './db/connection.js';

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route setup
app.use('/api', fileRoutes); // Mount file-related routes under /api
app.use('/uploads', express.static('uploads')); // Serve uploaded files publicly from the uploads directory

const PORT = process.env.PORT || 4028; // Define the port for the server

// Sync the database and start the server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });
