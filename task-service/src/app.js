require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const documentRoutes = require('./routes/documentRoutes');

app.use(express.json());
app.use('/documents', documentRoutes);

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Document Service running on port ${PORT}`);
  });
});
