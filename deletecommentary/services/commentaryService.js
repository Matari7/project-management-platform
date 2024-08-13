const Commentary = require('../models/commentary');

const deleteCommentary = async (id) => {
    try {
        const result = await Commentary.destroy({
            where: { id }
        });
        return result;
    } catch (error) {
        throw new Error('Error deleting project: ' + error.message);
    }
};

module.exports = {
    deleteCommentary
};
