const Commentary = require('../services/commentaryService');

exports.deleteCommentary = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Commentary.deleteCommentary(id);
        if (result) {
            res.status(200).json({ message: 'Commentary deleted successfully' });
        } else {
            res.status(404).json({ message: 'Commentary not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting commentary', error: error.message });
    }
};
