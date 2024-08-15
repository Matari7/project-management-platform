const express = require('express');
const { mongoDBConnection, sequelize } = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
require('dotenv').config();
const cors = require('cors'); 
const client = require('prom-client');

const app = express();
app.use(cors());

app.use(express.json());

mongoDBConnection();

app.use('/api', roleRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
