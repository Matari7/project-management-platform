const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');
const sequelize = require('./config/db');
const cors = require('cors');
const client = require('prom-client');
require('dotenv').config();

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 4008;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.log('Error: ' + err));
