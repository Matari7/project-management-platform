const subscriptionService = require('../services/subscriptionService');

exports.subscribe = async (req, res) => {
    const { user_id, project_id } = req.body;
    try {
        const subscription = await subscriptionService.subscribeToProject(user_id, project_id);
        res.status(200).json({ message: 'Subscribed to project successfully', subscription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await subscriptionService.getAllSubscriptions();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
