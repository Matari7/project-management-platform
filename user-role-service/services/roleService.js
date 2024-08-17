const User = require('../models/userModel');
const Role = require('../models/roleModel');

//Adds a role to a user. If the user already has roles, appends the new role; 
//otherwise, creates a new role entry
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

//Retrieves roles for a specific user.
const getUserRoles = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return await Role.findOne({ user_id: userId });
};

module.exports = { addRoleToUser, getUserRoles };
