const commentaryService = require('../services/commentaryService');

exports.getCommentaries = async (req, res) => {
    try {
        const { projectId } = req.params;
        console.log('Fetching commentaries for projectId:', projectId);

        // Llama al servicio para obtener los comentarios
        const commentaries = await commentaryService.getCommentaries(projectId);

        if (!commentaries || commentaries.length === 0) {
            return res.status(404).json({ message: 'No commentaries found for this project' });
        }

        res.status(200).json(commentaries);
    } catch (error) {
        console.error('Error retrieving commentaries:', error);
        res.status(500).json({ error: 'Error retrieving commentaries' });
    }
};
