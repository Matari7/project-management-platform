const express = require('express');
const cors = require('cors');
const client = require('prom-client'); 
const app = express();
const register = new client.Registry();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Collect and expose default metrics for Prometheus
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics()); // Serve metrics for Prometheus
});

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes); // Mount user-related routes at /api/users

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
