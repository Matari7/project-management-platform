const connection = require('../config/db');

async function getUserByEmail(email) {
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}

module.exports = {
    getUserByEmail,
};
