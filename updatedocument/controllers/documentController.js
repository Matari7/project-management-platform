const documentService = require('../services/documentService');

exports.updateDocument = async (req, res) => {
    try {
        // Call the service to update the document
        const updatedDocument = await documentService.updateDocument(req.params.id, req.body);
        
        // Check if the document was found and updated
        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }
        
        // Send a success response with the updated document
        res.status(200).json({ message: 'Document updated successfully', document: updatedDocument });
    } catch (error) {
        // Handle errors and send an error response
        res.status(400).json({ message: error.message });
    }
};
