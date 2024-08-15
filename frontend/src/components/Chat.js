import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('http://').join('')}:8080/ws`);
        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };
        setWs(socket);
    }, []);

    const sendMessage = () => {
        if (ws) {
            ws.send(message);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
