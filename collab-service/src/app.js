const express = require('express');
const redis = require('redis');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

app.use(express.json());
app.use('/collab', routes(client));

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Collab service running on port ${PORT}`);
});
