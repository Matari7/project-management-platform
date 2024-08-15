const Document = require('../services/documentService');

exports.deleteDocument = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Document.deleteDocument(id);
        if (result) {
            res.status(200).json({ message: 'Document deleted successfully' });
    } else {
        res.status(404).json({ message: 'Document not found' });
    }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting document', error: error.message });
    }
};
