import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Component for managing user roles.
 */
const UserRoleService = () => {
    // State to hold the list of users
    const [users, setUsers] = useState([]);
    // State to hold the selected user ID
    const [selectedUserId, setSelectedUserId] = useState('');
    // State to hold the selected role
    const [selectedRole, setSelectedRole] = useState('admin');
    // State to hold the list of roles assigned to the user
    const [role, setRole] = useState([]);
    // State to hold messages, including errors and success messages
    const [message, setMessage] = useState('');

    /**
     * Fetches the list of users when the component mounts.
     */
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}:4023/api/users`);
                setUsers(response.data);
                if (response.data.length > 0) {
                    setSelectedUserId(response.data[0].id);  // Select the first user by default
                }
            } catch (error) {
                setMessage(`Error fetching users: ${error.message}`);
            }
        };

        fetchUsers();
    }, []);

    /**
     * Fetches roles for the currently selected user.
     */
    const fetchRoles = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}:4023/api/roles/${selectedUserId}`);
            setRole(response.data.role || []);
            setMessage('Roles retrieved successfully');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('User not found');
            } else {
                setMessage(`Error fetching roles: ${error.message}`);
            }
        }
    };

    /**
     * Adds a new role to the currently selected user.
     */
    const addRole = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}:4023/api/roles/add`, { userId: selectedUserId, role: selectedRole });
            fetchRoles(); // Fetch roles again after adding a new one
            setMessage('Role added successfully');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('User not found');
            } else {
                setMessage(`Error adding role: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <h2>User Role Service</h2>
            <div>
                <label>User:</label>
                <select
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.username}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Role:</label>
                <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button onClick={addRole}>Add Role</button>
            <button onClick={fetchRoles}>Fetch Roles</button>
            {message && <p>{message}</p>}
            <ul>
                {role.map((r, index) => (
                    <li key={index}>{r}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserRoleService;
