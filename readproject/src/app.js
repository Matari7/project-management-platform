const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/projectSchema'); // GraphQL schema
const resolvers = require('./resolvers/projectResolver'); // GraphQL resolvers
const sequelize = require('./config/db'); // Database configuration
const cors = require('cors');
const client = require('prom-client'); // Prometheus client
require('dotenv').config();

const app = express();
app.use(cors());

// Set up GraphQL endpoint with schema and resolvers
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL interface
}));

const register = new client.Registry();

// Collect default metrics for Prometheus
client.collectDefaultMetrics({ register });

// Endpoint to expose Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4008;

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.log('Error: ' + err));
