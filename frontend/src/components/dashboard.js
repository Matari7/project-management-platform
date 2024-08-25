import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <Router>
    <div >
      <h1>Microservices Frontend</h1>
      <nav>
        <ul>
          {/* Row 1 of links */}
          <li><Link to="/create-user">Create User</Link></li>
          <li><Link to="/delete-user">Delete User</Link></li>
          <li><Link to="/update-user">Update User</Link></li>
          <li><Link to="/read-user">Read User</Link></li>
          <li><Link to="/user-role-service">User Role Service</Link></li>
          <li><Link to="/createcommentary">Create Commentary</Link></li>
          <li><Link to="/deletecommentary">Delete Commentary</Link></li>
          <li><Link to="/updatecommentary">Update Commentary</Link></li>
          <li><Link to="/readcommentaries">Read Commentaries</Link></li>

          {/* Row 2 of links */}
          <li><Link to="/createdocument">Create Document</Link></li>
          <li><Link to="/deletedocument">Delete Document</Link></li>
          <li><Link to="/updatedocument">Update Document</Link></li>
          <li><Link to="/createproject">Create Project</Link></li>
          <li><Link to="/deleteproject">Delete Project</Link></li>
          <li><Link to="/updateproject">Update Project</Link></li>
          <li><Link to="/readproject">Read Project</Link></li>
          <li><Link to="/projectSubscriptionService">Project Subscription Service</Link></li>
          <li><Link to="/readtask-service">Read Task</Link></li>
          <li><Link to="/createtask-service">Create Task</Link></li>
          <li><Link to="/files">File Upload</Link></li>
          <li><Link to="/order-service">Order</Link></li>
          <li><Link to="/product-service">Product</Link></li>
          <li><Link to="/chat-service">Chat</Link></li>
        </ul>
      </nav>

      
      <footer>
        <p>SI-001 Microservices Frontend. Made By Ariel Campoverde Siuuuuuu!</p>
      </footer>
    </div>
  </Router>
);
}


export default Navigation;