const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();
require('./config/db');

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000' // Permite el dominio del frontend en desarrollo o producción
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
