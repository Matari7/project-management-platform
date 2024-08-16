const Document = require('../models/document');

const updateDocument = async (id, updateData) => {
    try {
        const document = await Document.findByPk(id);
        if (!document) return null;

        // Asigna los valores específicos de los campos que deseas actualizar
        if (updateData.title) document.document_name = updateData.content;
        if (updateData.content) document.document_content = updateData.content;
        if (updateData.projectId) document.project_id = updateData.projectId;
        if (updateData.userId) document.user_id = updateData.userId;

        await document.save(); 
        return document; 
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateDocument
};
