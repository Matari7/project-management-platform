const pool = require('./db');

const updateProject = (id, name, description) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE projects SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

module.exports = {
  updateProject,
};
