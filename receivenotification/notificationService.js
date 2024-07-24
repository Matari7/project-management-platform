const notificationModel = require("./notificationModel");

class NotificationService {
  async receiveNotification(id) {
    const notification = await notificationModel.getNotificationById(id);
    if (!notification) {
      throw new Error(`Notification with id ${id} not found`);
    }
    return notification;
  }
}

module.exports = new NotificationService();
