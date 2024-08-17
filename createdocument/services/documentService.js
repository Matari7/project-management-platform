const Document = require('../models/document');

// Function to create a new document in the database
exports.createDocument = async (documentData) => {
    const { title, content, projectId, userId } = documentData;

    // Create a new document record with the provided title, content, projectId, and userId
    const document = await Document.create({ 
        document_name: title, 
        document_content: content, 
        project_id: projectId, 
        user_id: userId 
    });

    return document;
};
