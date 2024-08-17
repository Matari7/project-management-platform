const express = require('express');
const bodyParser = require('body-parser');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const cors = require('cors');
const client = require('prom-client'); // Prometheus client for metrics
const app = express();

// Load environment variables from .env file
require('dotenv').config();
// Load database connection configuration
require('./db/connection');

app.use(cors()); // Enable CORS for cross-origin requests

app.use(bodyParser.json()); // Parse JSON request bodies

// Use subscription routes for API endpoints
app.use('/api', subscriptionRoutes);

const register = new client.Registry(); // Create a new Prometheus registry

// Collect default metrics
client.collectDefaultMetrics({ register });

// Define a route to serve Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType); // Set content type to Prometheus metrics format
  res.end(await register.metrics()); // Return the collected metrics
});

// Define the port from environment variable or default to 4021
const PORT = process.env.PORT || 4021;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
