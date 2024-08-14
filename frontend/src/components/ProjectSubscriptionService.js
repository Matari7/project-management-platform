import React, { useState, useEffect } from 'react';

const ProjectSubscriptionService = () => {
    const [userId, setUserId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [message, setMessage] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);

    const subscribeToProject = async () => {
        try {
            const response = await fetch('http://localhost:4021/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, project_id: projectId })
            });

            const result = await response.json();
            setMessage(result.message);
            fetchSubscriptions();  // Fetch updated list of subscriptions
        } catch (error) {
            setMessage('Error subscribing to project: ' + error.message);
        }
    };

    const fetchSubscriptions = async () => {
        try {
            const response = await fetch('http://localhost:4021/api/subscriptions');
            const result = await response.json();
            setSubscriptions(result);
        } catch (error) {
            setMessage('Error fetching subscriptions: ' + error.message);
        }
    };

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    return (
        <div>
            <h2>Subscribe to Project</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <input
                type="text"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                placeholder="Project ID"
            />
            <button onClick={subscribeToProject}>Subscribe</button>
            {message && <p>{message}</p>}
            <h3>Subscriptions:</h3>
            <ul>
                {subscriptions.map(sub => (
                    <li key={sub.id}>
                        User {sub.user_id} subscribed to Project {sub.project_id} on {new Date(sub.created_at).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectSubscriptionService;
