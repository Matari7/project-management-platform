import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationHistory = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/notificationhistory/${userId}`);
                setNotifications(res.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div>
            <h2>Notification History for User {userId}</h2>
            {notifications.length > 0 ? (
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <p>{notification.message}</p>
                            <p><small>{new Date(notification.created_at).toLocaleString()}</small></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No notifications found.</p>
            )}
        </div>
    );
};

export default NotificationHistory;
