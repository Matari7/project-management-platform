const pool = require('./db');

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.affectedRows > 0) {
        resolve();
      } else {
        reject(new Error('No rows affected'));
      }
    });
  });
};

module.exports = {
  deleteUser,
};
