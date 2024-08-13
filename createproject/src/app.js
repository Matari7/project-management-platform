const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();
const cors = require('cors');
require('./config/db');
const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000' // Permite el dominio del frontend en desarrollo o producción
};

app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
