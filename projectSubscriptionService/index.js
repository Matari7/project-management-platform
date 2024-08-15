const express = require('express');
const bodyParser = require('body-parser');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');

require('dotenv').config();
require('./db/connection');

app.use(cors());

app.use(bodyParser.json());

app.use('/api', subscriptionRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});


const PORT = process.env.PORT || 4021;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
