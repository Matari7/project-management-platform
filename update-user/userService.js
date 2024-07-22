const EventEmitter = require('events');
const bcrypt = require('bcrypt');
const userModel = require('./userModel');

class UserService extends EventEmitter {
  async updateUser(id, email, password) {
    console.log('ID:', id);  // Verifica el ID
    console.log('Email:', email);  // Verifica el email
    console.log('Password:', password);  // Verifica la contraseña

    if (!password) {
      throw new Error('Password is required');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await userModel.updateUser(id, email, passwordHash);
    this.emit('userUpdated', {
      eventType: 'UserUpdated',
      timestamp: new Date().toISOString(),
      data: user,
    });
    return user;
  }
}

module.exports = new UserService();
