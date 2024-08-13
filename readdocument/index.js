const express = require('express');
const documentRoutes = require('./routes/documentRoutes');
const cors = require('cors');
const app = express();
const soap = require('soap');
const documentService = require('./services/documentService');
const fs = require('fs');
const path = require('path');

require('dotenv').config();
require('./db/connection');

app.use(cors());
app.use(express.json());
app.use('/api/documents', documentRoutes);

// Cargar el archivo WSDL
const wsdlPath = path.join(__dirname, 'wsdl', 'documentService.wsdl');
const wsdl = fs.readFileSync(wsdlPath, 'utf8');

// Crear y exponer el servicio SOAP
soap.listen(app, '/wsdl', documentService, wsdl, () => {
    console.log(`SOAP server is listening on http://localhost:4016/wsdl`);
});

const PORT = process.env.PORT || 4016;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
