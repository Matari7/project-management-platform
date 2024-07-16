require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
  });
});
