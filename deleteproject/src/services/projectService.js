const Project = require('../models/Project');

const deleteProject = async (id) => {
    try {
        const result = await Project.destroy({
            where: { id }
        });
        return result;
    } catch (error) {
        throw new Error('Error deleting project: ' + error.message);
    }
};

module.exports = {
    deleteProject
};
