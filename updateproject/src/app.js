const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');
require('dotenv').config();
require('./config/db');

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
