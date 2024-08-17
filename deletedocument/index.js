const express = require('express');
const cors = require('cors');
const app = express();
const documentRoutes = require('./routes/documentRoutes');
require('dotenv').config();
require('./db/connection');
const client = require('prom-client');

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route setup
app.use('/api/documents', documentRoutes); // Mount document-related routes under /api/documents

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics()); // Serve metrics for Prometheus monitoring
});

// Start the server
const PORT = process.env.PORT || 4014;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
