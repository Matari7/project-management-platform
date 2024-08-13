const Commentary = require('../models/commentary');

const updateCommentary = async (id, updateData) => {
    try {
        const commentary = await Commentary.findByPk(id);
        if (!commentary) return null;

        // Asigna los valores específicos de los campos que deseas actualizar
        if (updateData.content) commentary.comment = updateData.content;
        if (updateData.projectId) commentary.project_id = updateData.projectId;
        if (updateData.userId) commentary.user_id = updateData.userId;

        await commentary.save();
        return commentary; 
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateCommentary
};
