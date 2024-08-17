const User = require('../models/User');
const projectService = require('../services/projectService');

// Controller function to handle the creation of a new project
const createProject = async (req, res) => {
    try {
        const { name, description, userId } = req.body;

        // Check that the user exists in the users database
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Create the project in the projects database
        const project = await projectService.createProject({ name, description, user_id: user.id });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error: error.message });
    }
};

module.exports = {
    createProject
};
