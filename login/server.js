import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import sequelize from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });
