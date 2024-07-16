require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const projectRoutes = require('./routes/projectRoutes');

app.use(express.json());
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Project Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    setTimeout(startServer, 5000); // Retry after 5 seconds
  }
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
  process.exit(1); // Optional: exit the process to avoid undefined states
});
