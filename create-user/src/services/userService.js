const User = require('../models/User');

// Function to create a new user in the database
exports.createUser = async (userData) => {
  const { username, email, password } = userData;

  // Create a new user record with the provided username, email, and password (stored as password_hash)
  const user = await User.create({
    username,
    email,
    password_hash: password
  });

  return user;
};
