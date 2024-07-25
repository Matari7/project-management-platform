const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'mysql-cristiancaiza.alwaysdata.net',
    user: '357693_cris',
    password: 'mysql123',
    database: 'cristiancaiza_projects',
    port: 3306,
  });
  
  module.exports = pool;
  
