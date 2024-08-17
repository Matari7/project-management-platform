const express = require('express');
require('./db/connection');
const commentaryRoutes = require('./routes/commentaryRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Route setup
app.use('/api/commentaries', commentaryRoutes); // Mount commentary-related routes under /api/commentaries

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics()); // Serve metrics for Prometheus monitoring
});

// Start the server
const PORT = process.env.PORT || 4010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
