const documentService = require('../services/documentService');
const Project = require('../models/Project');
const User = require('../models/User');

// Controller function to handle the creation of a new document
exports.createDocument = async (req, res) => {
    try {
        const { title, content, projectId, userId } = req.body;

        // Check that all required fields are provided
        if (!title || !content || !projectId || !userId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check that the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Check that the project exists
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(400).json({ message: 'Project does not exist' });
        }

        // Create the document using the document service
        const document = await documentService.createDocument({ title, content, projectId, userId });
        res.status(201).json(document);
    } catch (error) {
        console.error('Error creating document:', error);
        res.status(500).json({ message: 'Error creating document', error: error.message });
    }
};
