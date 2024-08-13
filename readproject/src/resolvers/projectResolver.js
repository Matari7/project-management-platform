const Project = require('../models/Project');

const resolvers = {
    getProjects: async () => {
        return await Project.findAll();
    },
    getProject: async ({ id }) => {
        return await Project.findByPk(id);
    },
};

module.exports = resolvers;
