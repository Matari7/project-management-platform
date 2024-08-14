const express = require('express');
const router = express.Router();
const soap = require('soap');
const documentController = require('../controllers/documentController');
const path = require('path');

// Configura el endpoint SOAP
router.post('/wsdl', (req, res) => {
    const wsdlPath = path.resolve(__dirname, '../wsdl/documentService.wsdl');
    soap.listen(req, res, documentController, wsdlPath);
});

module.exports = router;
