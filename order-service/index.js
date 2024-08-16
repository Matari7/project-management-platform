import express from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js';
import sequelize from './db/connection.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', orderRoutes);

const PORT = process.env.PORT || 4027;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });
