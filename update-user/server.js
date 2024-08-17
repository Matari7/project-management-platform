const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');
const client = require('prom-client');
require('dotenv').config();
require('./config/db');

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests
app.use('/api/users', userRoutes); // Route requests to /api/users to userRoutes

const register = new client.Registry();
client.collectDefaultMetrics({ register }); // Collect default metrics for Prometheus

// Endpoint to serve Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () =>{ 
  console.log(`Server running on port ${PORT}`);
});
