import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Component to fetch and display a list of users from an API.
 */
const ReadUser = () => {
    // State to hold the list of users and messages
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    /**
     * Fetch users from the API when the component mounts.
     */
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make an HTTP GET request to fetch users
                const response = await axios.get(`${process.env.REACT_APP_API_URL}:4004/users`);
                // Set users data to state
                setUsers(response.data);
            } catch (error) {
                // Handle error and update message
                setMessage('Error fetching users');
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h2>Users List</h2>
            {message && <p>{message}</p>}
            <ul>
                {/* Map through users and display each one */}
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
