const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.COMMENTARY_DB_HOST,
  user: process.env.COMMENTARY_DB_USER,
  password: process.env.COMMENTARY_DB_PASSWORD,
  database: process.env.COMMENTARY_DB_NAME,
  port: process.env.COMMENTARY_DB_PORT,
});

module.exports = pool;
