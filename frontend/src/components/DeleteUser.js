import React, { useState } from 'react';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}:4002/api/users/${userId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setMessage('User deleted successfully!');
    } else {
      const errorData = await response.json();
        setMessage(`Failed to create user: ${errorData.message}`);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;
