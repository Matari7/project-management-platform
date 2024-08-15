const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();
const cors = require('cors');
const client = require('prom-client');
require('./config/db');
const app = express();


app.use(cors());


app.use(express.json());

app.use('/api/projects', projectRoutes);

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
