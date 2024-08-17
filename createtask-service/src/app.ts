import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import client from 'prom-client';
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.end(await register.metrics()); // Serve metrics for Prometheus monitoring
});

// Routes
app.use('/api', taskRoutes); // Mount task-related routes under /api

// Start the server
const PORT = process.env.PORT || 4024;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
