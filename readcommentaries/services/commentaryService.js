const Commentary = require('../models/commentary');

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
