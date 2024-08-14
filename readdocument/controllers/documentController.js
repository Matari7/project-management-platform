const soap = require('soap');
const documentService = require('../services/documentService');

exports.getDocuments = (args, callback) => {
    console.log('SOAP request received with args:', args);
    
    documentService.getDocumentsByProjectAndUser(args)
        .then(documents => {
            console.log('Returning documents via SOAP:', documents);
            callback(null, { documents });
        })
        .catch(err => {
            console.error('Error in SOAP response:', err);
            callback(err);
        });
};
