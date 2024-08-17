const Document = require('../services/documentService');

// Controller function to handle the deletion of a document
exports.deleteDocument = async (req, res) => {
    try {
        const { id } = req.params;

        // Attempt to delete the document by ID
        const result = await Document.deleteDocument(id);

        // Check if the document was deleted successfully
        if (result) {
            res.status(200).json({ message: 'Document deleted successfully' });
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (error) {
        // Handle any errors and respond with a 500 status and error message
        res.status(500).json({ message: 'Error deleting document', error: error.message });
    }
};
