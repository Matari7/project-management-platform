const commentaryService = require('../services/commentaryService');

exports.updateCommentary = async (req, res) => {
    try {
        // Attempt to update the commentary using the service
        const updatedCommentary = await commentaryService.updateCommentary(req.params.id, req.body);
        
        // If no commentary is found, return a 404 error
        if (!updatedCommentary) {
            return res.status(404).json({ message: 'Commentary not found' });
        }
        
        // Respond with a success message and the updated commentary
        res.status(200).json({ message: 'Commentary updated successfully', commentary: updatedCommentary });
    } catch (error) {
        // Handle any errors and respond with a 400 status
        res.status(400).json({ message: error.message });
    }
};
