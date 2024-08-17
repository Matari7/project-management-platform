import React, { useState, useEffect } from 'react';

/**
 * Component to manage project subscriptions by subscribing users to projects and displaying current subscriptions.
 */
const ProjectSubscriptionService = () => {
    // State to store the user ID and project ID
    const [userId, setUserId] = useState('');
    const [projectId, setProjectId] = useState('');
    // State to store messages and list of subscriptions
    const [message, setMessage] = useState('');
    const [subscriptions, setSubscriptions] = useState([]);

    /**
     * Handles the subscription of a user to a project.
     * Sends a POST request to the server with user ID and project ID.
     */
    const subscribeToProject = async () => {
        try {
            // Sends a POST request to subscribe a user to a project
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4021/api/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, project_id: projectId })
            });

            const result = await response.json();
            setMessage(result.message);
            fetchSubscriptions();  // Fetch the updated list of subscriptions
        } catch (error) {
            // Updates the message state with an error message
            setMessage('Error subscribing to project: ' + error.message);
        }
    };

    /**
     * Fetches the list of current subscriptions from the server.
     * Sends a GET request and updates the subscriptions state with the response data.
     */
    const fetchSubscriptions = async () => {
        try {
            // Sends a GET request to fetch the list of subscriptions
            const response = await fetch(`${process.env.REACT_APP_API_URL}:4021/api/subscriptions`);
            const result = await response.json();
            setSubscriptions(result);
        } catch (error) {
            // Updates the message state with an error message
            setMessage('Error fetching subscriptions: ' + error.message);
        }
    };

    // Fetch subscriptions when the component mounts
    useEffect(() => {
        fetchSubscriptions();
    }, []);

    return (
        <div>
            <h2>Subscribe to Project</h2>
            {/* Input for user ID */}
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            {/* Input for project ID */}
            <input
                type="text"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                placeholder="Project ID"
            />
            {/* Button to subscribe to the project */}
            <button onClick={subscribeToProject}>Subscribe</button>
            {/* Display message if there is any */}
            {message && <p>{message}</p>}
            <h3>Subscriptions:</h3>
            {/* List of subscriptions */}
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
