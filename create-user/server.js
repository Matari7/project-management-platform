const express = require('express');
const cors = require('cors');  // Importa el paquete cors
const app = express();

// Configura CORS para permitir solicitudes desde un origen específico (en producción)
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000' // Permite el dominio del frontend en desarrollo o producción
};

app.use(cors(corsOptions)); // Aplica CORS con las opciones especificadas

app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
