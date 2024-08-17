const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes');

require('dotenv').config(); // Loads environment variables from a .env file
const app = express();

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mounts the productRoutes router on the '/api' path
app.use('/api', productRoutes);

// Set the port for the server to listen on
const PORT = process.env.PORT || 4026;

// Starts the server and logs a message indicating the server is running
app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
});
