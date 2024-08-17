const Project = require('../models/Project');

// Define GraphQL resolvers for the Project model
const resolvers = {
    // Resolver to get all projects
    getProjects: async () => {
        return await Project.findAll(); // Fetch all projects from the database
    },
    // Resolver to get a specific project by its ID
    getProject: async ({ id }) => {
        return await Project.findByPk(id); // Fetch a project by its primary key (ID)
    },
};

module.exports = resolvers;
