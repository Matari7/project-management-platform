import React, { useState } from 'react';

/**
 * Component to handle the deletion of a user.
 */
function DeleteUser() {
  // State to store the user ID input by the user
  const [userId, setUserId] = useState('');
  // State to store and display messages to the user
  const [message, setMessage] = useState('');

  /**
   * Handles the user deletion process.
   * Sends a DELETE request to the server and updates the message state based on the response.
   * 
   * @param {Event} e - The form submit event
   */
  const handleDelete = async (e) => {
    e.preventDefault();

    // Sends a DELETE request to the API with the user ID
    const response = await fetch(`${process.env.REACT_APP_API_URL}:4002/api/users/${userId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      // Updates the message state with a success message
      setMessage('User deleted successfully!');
    } else {
      // Parses the error response and updates the message state with an error message
      const errorData = await response.json();
      setMessage(`Failed to delete user: ${errorData.message}`);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      {/* Form to input user ID and trigger the deletion */}
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
      {/* Display message if there is any */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;
