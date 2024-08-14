import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', taskRoutes);

// Sync DB and Start Server
const PORT = process.env.PORT || 4024;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
