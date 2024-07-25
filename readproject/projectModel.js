const pool = require('./db');

const getProjectById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM projects WHERE id = ?', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        reject(new Error('Project not found'));
      }
    });
  });
};

module.exports = {
  getProjectById,
};
