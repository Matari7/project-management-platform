const Document = require('../models/document');

// Service function to handle the deletion of a document by ID
const deleteDocument = async (id) => {
    try {
        // Attempt to delete the document by ID
        const result = await Document.destroy({
            where: { id } // Specify the condition for deletion (matching ID)
        });

        return result; // Return the result of the deletion operation (number of rows affected)
    } catch (error) {
        throw new Error('Error deleting document: ' + error.message); // Throw an error if something goes wrong
    }
};

module.exports = {
    deleteDocument
};
