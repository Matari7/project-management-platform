const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'your-aws-region' });
const secretsManager = new AWS.SecretsManager();

async function getSecretValue(secretName) {
  try {
    const secret = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    return JSON.parse(secret.SecretString);
  } catch (error) {
    console.error('Error retrieving secret:', error);
    throw error;
  }
}

async function createDatabasePools() {
  try {
    // Obtén los secretos para la base de datos de usuarios
    const userDbSecrets = await getSecretValue('USER_DB_SECRET_ID');
    const mysqlUsersPool = mysql.createPool({
      host: userDbSecrets.USER_DB_HOST,
      user: userDbSecrets.USER_DB_USER,
      password: userDbSecrets.USER_DB_PASSWORD,
      database: userDbSecrets.USER_DB_NAME,
      port: userDbSecrets.USER_DB_PORT,
    });

    // Obtén los secretos para la base de datos de proyectos
    const projectDbSecrets = await getSecretValue('PROJECT_DB_SECRET_ID');
    const mysqlProjectsPool = mysql.createPool({
      host: projectDbSecrets.PROJECT_DB_HOST,
      user: projectDbSecrets.PROJECT_DB_USER,
      password: projectDbSecrets.PROJECT_DB_PASSWORD,
      database: projectDbSecrets.PROJECT_DB_NAME,
      port: projectDbSecrets.PROJECT_DB_PORT,
    });

    return { mysqlUsersPool, mysqlProjectsPool };
  } catch (error) {
    console.error('Error creating database pools:', error);
    throw error;
  }
}

module.exports = createDatabasePools;
