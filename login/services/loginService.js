const User = require('../models/user');

const loginService = {
    login: async (username, password) => {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return { success: false, message: 'Incorrect username.' };
            }
            if (user.password !== password) {
                return { success: false, message: 'Incorrect password.' };
            }
            return { success: true, user };
        } catch (err) {
            throw new Error('Server error');
        }
    }
};

module.exports = loginService;
