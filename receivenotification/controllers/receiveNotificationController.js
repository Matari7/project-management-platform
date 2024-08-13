const Notification = require('../models/notification');

exports.getUnreadNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.getNotificationsByUserId(userId);

        if (notifications.length > 0) {
            const notificationIds = notifications.map(notification => notification.id);
            await Notification.markAsRead(notificationIds);
        }

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
