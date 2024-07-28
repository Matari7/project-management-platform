const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.USER_DB_HOST,
  user: process.env.USER_DB_USER,
  password: process.env.USER_DB_PASSWORD,
  database: process.env.USER_DB_NAME,
  port: process.env.USER_DB_PORT,
});

module.exports = pool;
