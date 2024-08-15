const express = require('express');
const cors = require('cors');
const commentaryRoutes = require('./routes/commentaryRoutes');
const app = express();
const client = require('prom-client');

require('dotenv').config();
require('./db/connection');
app.use(cors());
app.use(express.json());
app.use('/api/commentaries', commentaryRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4012;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
