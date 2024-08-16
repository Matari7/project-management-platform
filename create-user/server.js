const express = require('express');
const cors = require('cors');
const client = require('prom-client'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import the Swagger specification

const app = express();
const register = new client.Registry();

app.use(cors());
app.use(express.json());

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
