const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.PROJECT_DB_HOST,
  user: process.env.PROJECT_DB_USER,
  password: process.env.PROJECT_DB_PASSWORD,
  database: process.env.PROJECT_DB_NAME,
  port: process.env.PROJECT_DB_PORT,
});
  
  module.exports = pool;