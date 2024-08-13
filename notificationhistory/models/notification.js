const pool = require('../db/dbConnection');

class Notification {
    static async getNotificationsByUserId(userId) {
        const [rows] = await pool.query(
            'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC',
            [userId]
        );
        return rows;
    }
}

module.exports = Notification;
