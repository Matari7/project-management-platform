const pool = require('./db');

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        reject(new Error('User not found'));
      }
    });
  });
};

module.exports = {
  getUser,
};
