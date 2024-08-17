const express = require('express');
const { mongoDBConnection, sequelize } = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
require('dotenv').config();
const cors = require('cors');
const client = require('prom-client');

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Establish MongoDB connection
mongoDBConnection();

// Route setup
app.use('/api', roleRoutes); // Use roleRoutes for API endpoints

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start the server
const PORT = process.env.PORT || 4023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
