import express from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js';
import sequelize from './db/connection.js';

const app = express();

// Middleware setup
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests

// API routes
app.use('/api', orderRoutes); // Routes for order-related API endpoints

const PORT = process.env.PORT || 4027;

// Database and server setup
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });
