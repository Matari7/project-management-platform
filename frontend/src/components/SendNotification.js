import React, { useState } from 'react';
import axios from 'axios';

const SendNotification = () => {
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const sendNotification = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/notifications/send', {
                userId,
                message,
            });
            setResponse(res.data);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <div>
            <h2>Send Notification</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendNotification}>Send</button>
            {response && (
                <div>
                    <h3>Notification Sent:</h3>
                    <p>ID: {response.id}</p>
                    <p>User ID: {response.userId}</p>
                    <p>Message: {response.message}</p>
                </div>
            )}
        </div>
    );
};

export default SendNotification;
