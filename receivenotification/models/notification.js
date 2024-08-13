const pool = require('../db/dbConnection');

class Notification {
    static async getNotificationsByUserId(userId) {
        const [rows] = await pool.query(
            'SELECT * FROM notifications WHERE user_id = ? AND status = "unread" ORDER BY created_at DESC',
            [userId]
        );
        return rows;
    }

    static async markAsRead(notificationIds) {
        await pool.query(
            'UPDATE notifications SET status = "read" WHERE id IN (?)',
            [notificationIds]
        );
    }
}

module.exports = Notification;
