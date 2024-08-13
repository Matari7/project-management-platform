const documentService = require('../services/documentService');

exports.getDocuments = async (req, res) => {
    console.log('Request received for fetching documents');
    try {
        const { projectId, userId } = req.body;
        console.log('Fetching documents for projectId:', projectId, 'and userId:', userId);

        if (!projectId || !userId) {
            console.log('Project ID or User ID not provided');
            return res.status(400).json({ message: 'Project ID and User ID are required' });
        }

        // Utiliza el servicio para obtener los documentos
        const documents = await documentService.getDocumentsByProjectAndUser({ projectId, userId });

        if (!documents || documents.length === 0) {
            console.log('No documents found for this project');
            return res.status(404).json({ message: 'No documents found for this project' });
        }

        res.status(200).json({ documents });
    } catch (error) {
        console.error('Error retrieving documents:', error);
        res.status(500).json({ error: 'Error retrieving documents' });
    }
};
