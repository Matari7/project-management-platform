import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadUser = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}:4004/users`);
                setUsers(response.data);
            } catch (error) {
                setMessage('Error fetching users');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            {message && <p>{message}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadUser;
