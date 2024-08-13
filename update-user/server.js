const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');  // Importa el paquete cors

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000' // Permite el dominio del frontend en desarrollo o producción
};

app.use(cors(corsOptions));

require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
