const documentService = require('../services/documentService');

exports.updateDocument = async (req, res) => {
    try {
        const updatedDocument = await documentService.updateDocument(req.params.id, req.body);
        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }
        
        res.status(200).json({ message: 'Document updated successfully', document: updatedDocument });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
