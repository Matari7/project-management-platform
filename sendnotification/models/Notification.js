const pool = require('../db/dbConnection');

class Notification {
    static async createNotification(userId, message) {
        const [result] = await pool.query(
            'INSERT INTO notifications (user_id, message) VALUES (?, ?)',
            [userId, message]
        );
        return result.insertId;
    }

    static async getNotificationsByUserId(userId) {
        const [rows] = await pool.query(
            'SELECT * FROM notifications WHERE user_id = ?',
            [userId]
        );
        return rows;
    }
}

module.exports = Notification;
