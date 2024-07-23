const pool = require('./db');

const deleteProject = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM projects WHERE id = $1', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rowCount > 0);
    });
  });
};

module.exports = {
  deleteProject,
};
