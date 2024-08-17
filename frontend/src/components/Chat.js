import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [ws, setWs] = useState(null);

    // Initialize WebSocket connection when the component mounts
    useEffect(() => {
        const socket = new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('http://').join('')}:8080/ws`);
        
        // Handle incoming messages from the WebSocket
        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        // Set the WebSocket instance in state
        setWs(socket);
    }, []);

    // Function to send a message through the WebSocket
    const sendMessage = () => {
        if (ws) {
            ws.send(message); // Send the current message through the WebSocket
            setMessage('');    // Clear the input field
        }
    };

    return (
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p> // Display each message in the chat
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update the message state as the user types
            />
            <button onClick={sendMessage}>Send</button>      
        </div>
    );
};

export default Chat;
