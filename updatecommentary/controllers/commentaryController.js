const commentaryService = require('../services/commentaryService');

exports.updateCommentary = async (req, res) => {
    try {
        const updatedCommentary = await commentaryService.updateCommentary(req.params.id, req.body);
        if (!updatedCommentary) {
            return res.status(404).json({ message: 'Commentary not found' });
        }
        
        res.status(200).json({ message: 'Commentary updated successfully', commentary: updatedCommentary });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
