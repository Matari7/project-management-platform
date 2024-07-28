const EventEmitter = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./usermodel');

class UserService extends EventEmitter {
  async loginUser(email, password) {
    console.log('Attempting to login with email:', email);
    const user = await userModel.getUserByEmail(email);
    if (!user) {
      console.log('User not found:', email);
      this.emit('loginAttempt', {
        eventType: 'LoginAttempt',
        data: {
          userId: null,
          email: email,
          success: false,
          timestamp: new Date().toISOString()
        }
      });
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      console.log('Invalid password for user:', email);
      this.emit('loginAttempt', {
        eventType: 'LoginAttempt',
        data: {
          userId: user.id,
          email: email,
          success: false,
          timestamp: new Date().toISOString()
        }
      });
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    console.log('Login successful for user:', email);
    this.emit('loginAttempt', {
      eventType: 'LoginAttempt',
      data: {
        userId: user.id,
        email: email,
        success: true,
        timestamp: new Date().toISOString()
      }
    });
    return { token, user: { id: user.id, email: user.email } };
  }
}

module.exports = new UserService();
