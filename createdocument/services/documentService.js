const Document = require('../models/document');


exports.createDocument = async (documentData) => {
    const { title, content, projectId, userId } = documentData;

    const document = await Document.create({ 
        document_name: title, 
        document_content: content, 
        project_id: projectId, 
        user_id: userId 
    });
        return document;
    };