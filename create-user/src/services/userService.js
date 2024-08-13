const User = require('../models/User');

exports.createUser = async (userData) => {
  const { username, email, password } = userData;
  
  const user = await User.create({
    username,
    email,
    password_hash: password
  });

  return user;
};
