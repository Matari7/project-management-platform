const EventEmitter = require('events');
const userModel = require('./userModel');

class UserService extends EventEmitter {
  async getUser(id) {
    const user = await userModel.getUser(id);
    this.emit('userRead', {
      eventType: 'UserRead',
      timestamp: new Date().toISOString(),
      data: user,
    });
    return user;
  }
}

module.exports = new UserService();
