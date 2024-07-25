const notificationModel = require("./notificationModel");

class NotificationService {
  async getNotificationHistory(user_id) {
    const notifications = await notificationModel.getNotificationHistoryByUserId(user_id);
    return notifications;
  }
}

module.exports = new NotificationService();
