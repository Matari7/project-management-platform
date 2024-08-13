const Notification = require('../models/notification');

exports.getNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.getNotificationsByUserId(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
