const Project = require('../models/Project');

const createProject = async ({ name, description, user_id }) => {
    try {
        const project = await Project.create({ name, description, user_id });
        return project;
    } catch (error) {
        throw new Error('Error creating project: ' + error.message);
    }
};

module.exports = {
    createProject
};
