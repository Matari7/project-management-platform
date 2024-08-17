import React, { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to create a new user
    const response = await fetch(`${process.env.REACT_APP_API_URL}:4001/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password }) // Send the user data as JSON
    });

    if (response.ok) {
      setMessage('User created successfully!'); // Display success message
    } else {
      const errorData = await response.json();
      setMessage(`Failed to create user: ${errorData.message}`); // Display error message
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>} {/* Display message if there is any */}
    </div>
  );
}

export default CreateUser;
