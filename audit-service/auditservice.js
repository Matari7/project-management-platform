require('dotenv').config();
console.log('AWS_REGION:', process.env.AWS_REGION);
console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY);

const AWS = require('aws-sdk');
const EventEmitter = require('events');
const auditModel = require('./auditmodel');

// Configurar AWS SDK usando variables de entorno
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Agregar registro de depuración para la configuración
console.log('AWS Config:', AWS.config);

class AuditService extends EventEmitter {
  constructor() {
    super();
    this.on('loginAttempt', this.recordLoginAttempt);
  }

  async recordLoginAttempt(event) {
    const { userId, email, success, timestamp } = event.data;
    try {
      console.log('Current AWS Config:', AWS.config); // Agregar registro de depuración aquí
      await auditModel.recordLoginAttempt(userId, email, success, timestamp);
      console.log('Login attempt recorded:', event.data);
    } catch (error) {
      console.error('Error recording login attempt:', error);
    }
  }
}

module.exports = new AuditService();
