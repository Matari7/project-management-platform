const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql-cristiancaiza.alwaysdata.net',
  user: '357693_cris',
  password: 'mysql123',
  database: 'cristiancaiza_commentaries',
  port: 3306,
});

module.exports = pool;
