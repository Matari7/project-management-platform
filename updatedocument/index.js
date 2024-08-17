const express = require('express');
const documentRoutes = require('./routes/documentRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');
require('dotenv').config();
require('./db/connection');

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use('/api/documents', documentRoutes); // Mount document routes on '/api/documents'

const register = new client.Registry();

// Collect default metrics
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType); // Set the content type for metrics
  res.end(await register.metrics()); // Send the collected metrics
});

const PORT = process.env.PORT || 4015;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start
});
