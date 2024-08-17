const express = require('express');
const commentaryRoutes = require('./routes/commentaryRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');
require('dotenv').config();
require('./db/connection');

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Route for handling commentary-related requests
app.use('/api/commentaries', commentaryRoutes);

// Setup Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Endpoint to expose metrics
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Define the port and start the server
const PORT = process.env.PORT || 4011;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
