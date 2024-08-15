const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../models/user');

async function authenticateUser(email, password) {
    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('User not found');
    }

    if (user.password_hash !== password) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return { token, user };
}

module.exports = {
    authenticateUser,
};
