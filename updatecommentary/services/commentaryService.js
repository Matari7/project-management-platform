const Commentary = require('../models/commentary');

// Function to update a commentary by its ID
const updateCommentary = async (id, updateData) => {
    try {
        // Find the commentary by primary key
        const commentary = await Commentary.findByPk(id);
        if (!commentary) return null; // Return null if the commentary is not found

        // Update fields if they are provided in updateData
        if (updateData.content) commentary.comment = updateData.content;
        if (updateData.projectId) commentary.project_id = updateData.projectId;
        if (updateData.userId) commentary.user_id = updateData.userId;

        // Save the updated commentary
        await commentary.save();
        return commentary; 
    } catch (error) {
        throw error; // Propagate error if any occurs
    }
};

module.exports = {
    updateCommentary
};
