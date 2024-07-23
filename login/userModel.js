const pool = require('./db');

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return reject(error);
      }
      if (results.length > 0) {
        console.log('User found:', results[0]);
        resolve(results[0]);
      } else {
        console.log('User not found for email:', email);
        reject(new Error('User not found'));
      }
    });
  });
};

module.exports = {
  getUserByEmail,
};
