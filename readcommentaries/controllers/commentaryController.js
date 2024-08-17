const commentaryService = require('../services/commentaryService');

exports.getCommentaries = async (req, res) => {
    try {
        // Extracts projectId from request parameters
        const { projectId } = req.params;
        console.log('Fetching commentaries for projectId:', projectId);

        // Calls the service to fetch commentaries for the specified projectId
        const commentaries = await commentaryService.getCommentaries(projectId);

        // If no commentaries are found, respond with a 404 status code and a message
        if (!commentaries || commentaries.length === 0) {
            return res.status(404).json({ message: 'No commentaries found for this project' });
        }

        // Respond with the fetched commentaries and a 200 status code
        res.status(200).json(commentaries);
    } catch (error) {
        // Logs the error and responds with a 500 status code and error message
        console.error('Error retrieving commentaries:', error);
        res.status(500).json({ error: 'Error retrieving commentaries' });
    }
};
