const mysql = require('mysql2/promise');

const mysqlCommentariesPool = mysql.createPool({
  host: 'mysql-cristiancaiza.alwaysdata.net',
  user: '357693_cris',
  password: 'mysql123',
  database: 'cristiancaiza_commentaries',
  port: 3306,
});

const mysqlUsersPool = mysql.createPool({
  host: 'mysql-cristiancaiza.alwaysdata.net',
  user: '357693_cris',
  password: 'mysql123',
  database: 'cristiancaiza_users',
  port: 3306,
});

const mysqlProjectsPool = mysql.createPool({
  host: 'mysql-cristiancaiza.alwaysdata.net',
  user: '357693_cris',
  password: 'mysql123',
  database: 'cristiancaiza_projects',
  port: 3306,
});

module.exports = { mysqlUsersPool, mysqlProjectsPool, mysqlCommentariesPool };
