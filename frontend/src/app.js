import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './css/styles.css';  // Import CSS file for styling

// Import components for different routes
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import OrderService from './components/OrderService';
import ProductService from './components/ProductService';
import Chat from './components/Chat';

import CreateUser from './components/CreateUser';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';
import ReadUser from './components/ReadUser';
import UserRoleService from './components/UserRoleService';

import CreateCommentary from './components/CreateCommentary';
import DeleteCommentary from './components/DeleteCommentary';
import UpdateCommentary from './components/UpdateCommentary';
import ReadCommentaries from './components/ReadCommentaries';

import CreateDocument from './components/CreateDocument';
import DeleteDocument from './components/DeleteDocument';
import UpdateDocument from './components/UpdateDocument';

import CreateProject from './components/CreateProject';
import DeleteProject from './components/DeleteProject';
import UpdateProject from './components/UpdateProject';
import ReadProject from './components/ReadProject';
import ProjectSubscriptionService from './components/ProjectSubscriptionService';

import ReadTask from './components/ReadTask';
import CreateTask from './components/CreateTask';

// Main App component
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true'); 
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container">
        <h1>Microservices Frontend</h1>
        {isLoggedIn ? (
          <>
            <nav>
              <ul className="nav-links">
                <li><Link to="/create-user">Create User</Link></li>
                <li><Link to="/delete-user">Delete User</Link></li>
                <li><Link to="/update-user">Update User</Link></li>
                <li><Link to="/read-user">Read User</Link></li>
                <li><Link to="/user-role-service">User Role Service</Link></li>
                <li><Link to="/createcommentary">Create Commentary</Link></li>
                <li><Link to="/deletecommentary">Delete Commentary</Link></li>
                <li><Link to="/updatecommentary">Update Commentary</Link></li>
                <li><Link to="/readcommentaries">Read Commentaries</Link></li>

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

            <button onClick={handleLogout}>Logout</button>

            <div className="content">
              <Routes>
                <Route path="/files" element={<FileUpload />} />
                <Route path="/order-service" element={<OrderService />} />
                <Route path="/readtask-service" element={<ReadTask />} />
                <Route path="/createtask-service" element={<CreateTask />} />
                <Route path="/user-role-service" element={<UserRoleService />} />
                <Route path="/chat-service" element={<Chat />} />
                <Route path="/projectSubscriptionService" element={<ProjectSubscriptionService />} />
                <Route path="/product-service" element={<ProductService />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/delete-user" element={<DeleteUser />} />
                <Route path="/update-user" element={<UpdateUser />} />
                <Route path="/read-user" element={<ReadUser />} />
                <Route path="/createcommentary" element={<CreateCommentary />} />
                <Route path="/deletecommentary" element={<DeleteCommentary />} />
                <Route path="/updatecommentary" element={<UpdateCommentary />} />
                <Route path="/readcommentaries" element={<ReadCommentaries />} />
                <Route path="/createdocument" element={<CreateDocument />} />
                <Route path="/deletedocument" element={<DeleteDocument />} />
                <Route path="/updatedocument" element={<UpdateDocument />} />
                <Route path="/createproject" element={<CreateProject />} />
                <Route path="/deleteproject" element={<DeleteProject />} />
                <Route path="/updateproject" element={<UpdateProject />} />
                <Route path="/readproject" element={<ReadProject />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
        
        <footer>
          <p>SI-001 Microservices Frontend. Made By Ariel Campoverde Siuuuuuu!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
