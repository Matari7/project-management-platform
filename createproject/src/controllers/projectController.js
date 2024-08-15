const User = require('../models/User');
const projectService = require('../services/projectService');

const createProject = async (req, res) => {
    try {
        const { name, description, userId } = req.body;

        // Verifica que el usuario exista en la base de datos de users
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Crea el proyecto en la base de datos de projects
        const project = await projectService.createProject({ name, description, user_id: user.id });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error: error.message });
    }
};

module.exports = {
    createProject
};
