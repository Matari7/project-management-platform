import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import client from 'prom-client';
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.end(await register.metrics());
});

// Routes
app.use('/api', taskRoutes);

// Sync DB and Start Server
const PORT = process.env.PORT || 4024;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
