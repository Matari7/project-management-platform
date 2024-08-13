const Project = require('../models/Project');

const updateProject = async (id, updateData) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) return null;

        Object.assign(project, updateData); 

        await project.save();
        return project; 
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateProject
};
