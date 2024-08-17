const commentaryService = require('../services/commentaryService');
const Project = require('../models/Project');
const User = require('../models/User');

// Controller function to handle the creation of a new commentary
const createCommentary = async (req, res) => {
    try {
        const { content, projectId, userId } = req.body;

        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Check if the project exists
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(400).json({ message: 'Project does not exist' });
        }

        // Create the commentary using the commentary service
        const commentary = await commentaryService.createCommentary({ content, projectId, userId });
        res.status(201).json(commentary);
    } catch (error) {
        console.error('Error creating commentary:', error);
        res.status(500).json({ message: 'Error creating commentary', error: error.message });
    }
};

module.exports = {
    createCommentary,
};
