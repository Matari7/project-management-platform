const Commentary = require('../models/commentary');


exports.createCommentary = async (commentaryData) => {
    const { content, projectId, userId } = commentaryData;

    const commentary = await Commentary.create({ 
        comment: content, 
        project_id: projectId, 
        user_id: userId 
    });
        return commentary;
    };