const Commentary = require('../models/commentary');

// Service function to handle the deletion of a commentary by ID
const deleteCommentary = async (id) => {
    try {
        // Attempt to delete the commentary by ID
        const result = await Commentary.destroy({
            where: { id } // Specify the condition for deletion (matching ID)
        });

        return result; // Return the result of the deletion operation (number of rows affected)
    } catch (error) {
        throw new Error('Error deleting commentary: ' + error.message); // Throw an error if something goes wrong
    }
};

module.exports = {
    deleteCommentary
};
