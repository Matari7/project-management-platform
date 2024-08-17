const Commentary = require('../services/commentaryService');

// Controller function to handle the deletion of a commentary
exports.deleteCommentary = async (req, res) => {
    try {
        const { id } = req.params;

        // Attempt to delete the commentary by ID
        const result = await Commentary.deleteCommentary(id);

        // Check if the commentary was deleted successfully
        if (result) {
            res.status(200).json({ message: 'Commentary deleted successfully' });
        } else {
            res.status(404).json({ message: 'Commentary not found' });
        }
    } catch (error) {
        // Handle any errors and respond with a 500 status and error message
        res.status(500).json({ message: 'Error deleting commentary', error: error.message });
    }
};
