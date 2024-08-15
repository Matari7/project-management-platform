const express = require('express');
const cors = require('cors');
const app = express();
const documentRoutes = require('./routes/documentRoutes');
require('dotenv').config();
require('./db/connection');
const client = require('prom-client');

app.use(cors());
app.use(express.json());
app.use('/api/documents', documentRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});


const PORT = process.env.PORT || 4014;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
