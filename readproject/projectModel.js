const pool = require('./db');

const getProjectById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM projects WHERE id = $1', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

module.exports = {
  getProjectById,
};
