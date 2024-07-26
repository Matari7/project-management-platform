const mysql = require('mysql2/promise');
require('dotenv').config();

const documentPool = mysql.createPool({
  host: process.env.DOCUMENT_DB_HOST,
  user: process.env.DOCUMENT_DB_USER,
  password: process.env.DOCUMENT_DB_PASSWORD,
  database: process.env.DOCUMENT_DB_NAME,
  port: process.env.DOCUMENT_DB_PORT,
});

const projectPool = mysql.createPool({
  host: process.env.PROJECT_DB_HOST,
  user: process.env.PROJECT_DB_USER,
  password: process.env.PROJECT_DB_PASSWORD,
  database: process.env.PROJECT_DB_NAME,
  port: process.env.PROJECT_DB_PORT,
});

module.exports = { documentPool, projectPool };
