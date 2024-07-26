const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlUsersPool = mysql.createPool({
  host: 'mysql-cristiancaiza.alwaysdata.net',
  user: '357693_cris',
  password: 'mysql123',
  database: 'cristiancaiza_users',
  port: 3306,
});

const mysqlProjectsPool = mysql.createPool({
  host: process.env.PROJECT_DB_HOST,
  user: process.env.PROJECT_DB_USER,
  password: process.env.PROJECT_DB_PASSWORD,
  database: process.env.PROJECT_DB_NAME,
  port: process.env.PROJECT_DB_PORT,
});

module.exports = { mysqlUsersPool, mysqlProjectsPool };
