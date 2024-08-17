const subscriptionService = require('../services/subscriptionService');

exports.subscribe = async (req, res) => {
    // Extracts user_id and project_id from the request body
    const { user_id, project_id } = req.body;

    try {
        // Calls the service method to subscribe the user to a project
        const subscription = await subscriptionService.subscribeToProject(user_id, project_id);

        // Sends a success response with a message and the subscription details
        res.status(200).json({ message: 'Subscribed to project successfully', subscription });
    } catch (error) {
        // Sends an error response with the error message
        res.status(400).json({ message: error.message });
    }
};

exports.getSubscriptions = async (req, res) => {
    try {
        // Calls the service method to retrieve all subscriptions
        const subscriptions = await subscriptionService.getAllSubscriptions();

        // Sends a success response with the list of subscriptions
        res.status(200).json(subscriptions);
    } catch (error) {
        // Sends an error response with the error message
        res.status(400).json({ message: error.message });
    }
};
