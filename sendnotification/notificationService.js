const EventEmitter = require("events");
const { v4: uuidv4 } = require("uuid");
const notificationModel = require("./notificationModel");

class NotificationService extends EventEmitter {
  async sendNotification(message, user_id) {
    const notification = {
      id: uuidv4(),
      message,
      user_id,
      timestamp: new Date().toISOString(),
    };
    await notificationModel.createNotification(notification);
    this.emit("notificationSent", notification);
    return notification;
  }
}

module.exports = new NotificationService();
