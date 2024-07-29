const { documentPool } = require('./db');

const updateUser = (id, email, passwordHash) => {
  return new Promise((resolve, reject) => {
    documentPool.query(
      'UPDATE users SET email = ?, password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [email, passwordHash, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results.affectedRows > 0) {
          resolve({ id, email, passwordHash });
        } else {
          reject(new Error('No rows affected'));
        }
      }
    );
  });
};

module.exports = {
  updateUser,
};
