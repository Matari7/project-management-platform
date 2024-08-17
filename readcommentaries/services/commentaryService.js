const Commentary = require('../models/commentary');

// Fetches commentaries for a specific project by its ID.
const getCommentaries = async (projectId) => {
    try {
        const commentaries = await Commentary.findAll({
            where: { project_id: projectId }
        });
        return commentaries;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCommentaries
};
