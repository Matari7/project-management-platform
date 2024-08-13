const projectService = require('../services/projectService');

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await projectService.deleteProject(id);
        if (result) {
            res.status(200).json({ message: 'Project deleted successfully' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error: error.message });
    }
};

module.exports = {
    deleteProject
};
