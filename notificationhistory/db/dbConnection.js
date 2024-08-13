const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.NOTIFICATIONS_DB_HOST,
    user: process.env.NOTIFICATIONS_DB_USER,
    password: process.env.NOTIFICATIONS_DB_PASSWORD,
    database: process.env.NOTIFICATIONS_DB_NAME,
    port: process.env.NOTIFICATIONS_DB_PORT
});

module.exports = pool;
