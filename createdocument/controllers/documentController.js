const documentService = require('../services/documentService');
const Project = require('../models/Project');
const User = require('../models/User');

exports.createDocument = async (req, res) => {
    try {
        const { title, content, projectId, userId } = req.body;

        if (!title || !content || !projectId || !userId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Verifica que el usuario exista
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Verifica que el proyecto exista
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(400).json({ message: 'Project does not exist' });
        }

        const document = await documentService.createDocument({ title, content, projectId, userId });
        res.status(201).json(document);
    } catch (error) {
        console.error('Error creating commentary:', error);
        res.status(500).json({ message: 'Error creating document', error: error.message });
    }
};
