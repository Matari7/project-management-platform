const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./db');

require('dotenv').config();

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`User service running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
