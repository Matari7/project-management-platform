const projectService = require('../services/projectService');

// Request object with project ID and update details and response object to send the result
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await projectService.updateProject(req.params.id, req.body);
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
