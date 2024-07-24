const notificationModel = require("./notificationModel");

class NotificationService {
  async getNotificationHistory(userId) {
    const notifications = await notificationModel.getNotificationHistoryByUserId(userId);
    return notifications;
  }
}

module.exports = new NotificationService();
