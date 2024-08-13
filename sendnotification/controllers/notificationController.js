const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const notificationId = await Notification.createNotification(userId, message);
        res.status(201).json({ id: notificationId, userId, message });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.getNotificationsByUserId(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
