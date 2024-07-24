const pool = require('./db');

const updateProject = (id, name, description) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE projects SET name = ?, description = ? WHERE id = ?',
      [name, description, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results.affectedRows > 0) {
          resolve({ id, name, description });
        } else {
          reject(new Error('No rows affected'));
        }
        
      }
    );
  });
};

module.exports = {
  updateProject,
};
