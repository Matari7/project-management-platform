const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();
const cors = require('cors');
const client = require('prom-client');
require('./config/db');
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route setup
app.use('/api/projects', projectRoutes); // Mount project-related routes under /api/projects

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics()); // Serve metrics for Prometheus monitoring
});

// Start the server
const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
