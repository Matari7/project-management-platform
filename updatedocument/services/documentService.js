const Document = require('../models/document');

// Updates a document with new data
const updateDocument = async (id, updateData) => {
    try {
        const document = await Document.findByPk(id);
        if (!document) return null;

        // Update specific fields with new values
        if (updateData.title) document.document_name = updateData.title;
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
