const User = require('../models/user');

exports.authenticateUser = async (username, password) => {
    const user = await User.findOne({ where: { username: username, password_hash: password } });
    return user;
};
