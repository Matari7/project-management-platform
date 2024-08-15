const express = require('express');
const sequelize = require('./db/connection');
const commentaryRoutes = require('./routes/commentaryRoutes');
const cors = require('cors');
const app = express();
const client = require('prom-client');

app.use(cors());
app.use(express.json());
app.use('/api/commentaries', commentaryRoutes);

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4010;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
