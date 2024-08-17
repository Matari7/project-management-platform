import React, { useState } from 'react';

/**
 * Component for updating user details.
 */
function UpdateUser() {
  // State to hold the user ID
  const [userId, setUserId] = useState('');
  // State to hold the new username
  const [username, setUsername] = useState('');
  // State to hold the new email
  const [email, setEmail] = useState('');
  // State to hold the new password
  const [password, setPassword] = useState('');
  // State to hold messages, including errors and success messages
  const [message, setMessage] = useState('');

  /**
   * Handles the form submission for updating the user.
   * @param {Event} e - The event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP PUT request to update the user details
      const response = await fetch(`${process.env.REACT_APP_API_URL}:4003/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        // Set the success message
        setMessage('User updated successfully!');
      } else {
        // Parse the error message from the response
        const errorData = await response.json();
        setMessage(`Failed to update user: ${errorData.message}`);
      }
    } catch (error) {
      // Set the error message if the fetch fails
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
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
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;
