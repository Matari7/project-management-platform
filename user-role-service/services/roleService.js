const User = require('../models/userModel');
const Role = require('../models/roleModel');

const addRoleToUser = async (userId, roleName) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const role = await Role.findOne({ user_id: userId });

    if (role) {
        role.roles.push(roleName);
        await role.save();
    } else {
        await Role.create({ user_id: userId, roles: [roleName] });
    }

    return role;
};

const getUserRoles = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return await Role.findOne({ user_id: userId });
};

module.exports = { addRoleToUser, getUserRoles };
