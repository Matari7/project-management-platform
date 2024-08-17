import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Component to fetch and display unread notifications for a specific user.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.userId - The ID of the user to fetch notifications for.
 */
const ReceiveNotification = ({ userId }) => {
    // State to hold the list of notifications
    const [notifications, setNotifications] = useState([]);

    /**
     * Fetch notifications for the given user ID when the component mounts or userId changes.
     */
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // Make an HTTP GET request to fetch notifications
                const res = await axios.get(`${process.env.REACT_APP_API_URL}:3000/api/receivenotification/${userId}`);
                // Set notifications data to state
                setNotifications(res.data);
            } catch (error) {
                // Log error if request fails
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [userId]); // Dependency array includes userId to refetch notifications when userId changes

    return (
        <div>
            <h2>Unread Notifications for User {userId}</h2>
            {notifications.length > 0 ? (
                <ul>
                    {/* Map through notifications and display each one */}
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <p>{notification.message}</p>
                            <p><small>{new Date(notification.created_at).toLocaleString()}</small></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No new notifications.</p>
            )}
        </div>
    );
};

export default ReceiveNotification;
