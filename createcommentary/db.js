const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlCommentariesPool = mysql.createPool({
  host: process.env.COMMENTARY_DB_HOST,
  user: process.env.COMMENTARY_DB_USER,
  password: process.env.COMMENTARY_DB_PASSWORD,
  database: process.env.COMMENTARY_DB_NAME,
  port: process.env.COMMENTARY_DB_PORT,
});

const mysqlUsersPool = mysql.createPool({
  host: process.env.USER_DB_HOST,
  user: process.env.USER_DB_USER,
  password: process.env.USER_DB_PASSWORD,
  database: process.env.USER_DB_NAME,
  port: process.env.USER_DB_PORT,
});

const mysqlProjectsPool = mysql.createPool({
  host: process.env.PROJECT_DB_HOST,
  user: process.env.PROJECT_DB_USER,
  password: process.env.PROJECT_DB_PASSWORD,
  database: process.env.PROJECT_DB_NAME,
  port: process.env.PROJECT_DB_PORT,
});

module.exports = { mysqlUsersPool, mysqlProjectsPool, mysqlCommentariesPool };
