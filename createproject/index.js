const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const mysql = require('mysql2/promise'); // Cambia según tu cliente de base de datos
const projectService = require('./projectService');

const app = express();
app.use(bodyParser.json());

// Configuración de AWS SDK
AWS.config.update({ region: 'us-west-2' }); // Cambia la región según corresponda
const secretsManager = new AWS.SecretsManager();

// Función para obtener secretos
const getSecrets = async () => {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: 'project-db-credentials' }).promise();
    let secrets;

    if ('SecretString' in data) {
      secrets = JSON.parse(data.SecretString);
    } else {
      const buff = Buffer.from(data.SecretBinary, 'base64');
      secrets = JSON.parse(buff.toString('ascii'));
    }

    return secrets;
  } catch (err) {
    console.error('Error retrieving secret:', err);
    throw new Error('Error retrieving secrets from AWS Secrets Manager');
  }
};

// Configuración de la base de datos
const initializeDatabase = async () => {
  try {
    const secrets = await getSecrets();

    const connection = await mysql.createPool({
      host: secrets.PROJECT_DB_HOST,
      user: secrets.PROJECT_DB_USER,
      password: secrets.PROJECT_DB_PASSWORD,
      database: secrets.PROJECT_DB_NAME,
      port: secrets.PROJECT_DB_PORT || 3306, // Asegúrate de incluir el puerto si es necesario
    });

    return connection;
  } catch (err) {
    console.error('Error initializing database connection:', err);
    throw new Error('Error initializing database connection');
  }
};

// Inicializa la conexión a la base de datos
let dbConnection;
initializeDatabase().then((conn) => {
  dbConnection = conn;
}).catch((err) => {
  console.error('Failed to initialize database:', err);
});

// Ruta para crear un proyecto
app.post('/projects', async (req, res) => {
  const { name, description, start_date, end_date, status, user_id } = req.body;

  try {
    if (!dbConnection) {
      throw new Error('Database connection is not initialized');
    }

    const project = await projectService.createProject(dbConnection, name, description, start_date, end_date, status, user_id);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3018, () => {
  console.log('Create Project service running on port 3018');
});
