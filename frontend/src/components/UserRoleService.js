import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRoleService = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedRole, setSelectedRole] = useState('admin');
    const [role, setRole] = useState([]);
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4023/api/users');
                setUsers(response.data);
                if (response.data.length > 0) {
                    setSelectedUserId(response.data[0].id);  // Seleccionar el primer usuario por defecto
                }
            } catch (error) {
                setMessage(`Error fetching users: ${error.message}`);
            }
        };

        fetchUsers();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get(`http://localhost:4023/api/roles/${selectedUserId}`);
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

    const addRole = async () => {

        try {
            await axios.post('http://localhost:4023/api/roles/add', { userId: selectedUserId, role: selectedRole });
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
