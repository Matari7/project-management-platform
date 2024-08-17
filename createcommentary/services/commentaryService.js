const Commentary = require('../models/commentary');

// Function to create a new commentary in the database
exports.createCommentary = async (commentaryData) => {
    const { content, projectId, userId } = commentaryData;

    // Create a new commentary record with the provided content, projectId, and userId
    const commentary = await Commentary.create({ 
        comment: content, 
        project_id: projectId, 
        user_id: userId 
    });

    return commentary;
};
