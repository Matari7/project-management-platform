const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const client = require('prom-client');
require('dotenv').config();
require('./config/db');

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route setup
app.use('/api/users', userRoutes); // Mount user-related routes under /api/users

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics()); // Serve metrics for Prometheus monitoring
});

// Start the server
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
