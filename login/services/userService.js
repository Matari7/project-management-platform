import User from '../models/user.js';

export const findUserByUsername = async (username) => {
    try {
        return await User.findOne({ where: { username } });
    } catch (error) {
        throw new Error('Error finding user');
    }
};

export const verifyPassword = (enteredPassword, storedPasswordHash) => {
    return enteredPassword === storedPasswordHash;
};
