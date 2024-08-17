const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');
require('dotenv').config();
require('./config/db');

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use('/api/projects', projectRoutes); // Route for project-related API endpoints

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start the server
const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
