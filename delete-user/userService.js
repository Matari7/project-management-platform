const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');
const userModel = require('./usermodel');

class UserService extends EventEmitter {
  async deleteUser(id) {
    await userModel.deleteUser(id);
    this.emit('userDeleted', {
      eventType: 'UserDeleted',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: { id },
    });
  }
}

module.exports = new UserService();
