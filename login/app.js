const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const client = require('prom-client');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Configurar la ruta raíz para manejar el login
app.use('/', authRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
