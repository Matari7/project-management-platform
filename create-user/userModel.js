const pool = require('./db');

const createUser = (email, passwordHash) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO users (email, password_hash) VALUES (?, ?)', [email, passwordHash], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.affectedRows > 0) {
        resolve({ id: results.insertId, email, passwordHash });
      } else {
        reject(new Error('No rows affected'));
      }
    });
  });
};

module.exports = {
  createUser,
};
