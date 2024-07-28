const EventEmitter = require('events');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const userModel = require('./usermodel');

class UserService extends EventEmitter {
  async createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await userModel.createUser(email, passwordHash);
    this.emit('userCreated', {
      eventType: 'UserCreated',
      eventId: uuidv4(),
      timestamp: new Date().toISOString(),
      data: user,
    });
    return user;
  }
}

module.exports = new UserService();