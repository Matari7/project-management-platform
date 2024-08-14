const express = require('express');
const soap = require('soap');
const path = require('path');
const bodyParser = require('body-parser');
const documentRoutes = require('./routes/documentRoutes');
const documentService = require('./services/documentService');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));
app.use('/api', documentRoutes);

const wsdlPath = path.resolve(__dirname, 'wsdl/documentService.wsdl');
const service = {
    DocumentService: {
        DocumentServicePortType: {
            getDocumentsByProjectAndUser: documentService.getDocumentsByProjectAndUser
        }
    }
};

app.listen(4016, () => {
    soap.listen(app, '/wsdl', service, wsdlPath, () => {
        console.log('SOAP server started on http://localhost:4016/wsdl');
    });
});
