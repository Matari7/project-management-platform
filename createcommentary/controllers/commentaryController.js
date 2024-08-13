const commentaryService = require('../services/commentaryService');
const Project = require('../../createproject/src/models/Project');
const User = require('../../create-user/src/models/User');

const createCommentary = async (req, res) => {
    try {
        const { content, projectId, userId } = req.body;

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
