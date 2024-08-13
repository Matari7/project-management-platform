const Document = require('../models/document');

const deleteDocument = async (id) => {
    try {
        const result = await Document.destroy({
            where: { id }
        });
        return result;
    } catch (error) {
        throw new Error('Error deleting document: ' + error.message);
    }
};

module.exports = {
    deleteDocument
};
