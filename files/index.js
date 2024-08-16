import express from 'express';
import cors from 'cors';
import fileRoutes from './routes/fileRoutes.js';
import sequelize from './db/connection.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', fileRoutes);
app.use('/uploads', express.static('uploads')); // To serve files publicly

const PORT = process.env.PORT || 4028;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });
