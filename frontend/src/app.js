import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ReadTask from './components/ReadTask';
import CreateTask from './components/CreateTask'
import Chat from './components/Chat';
import ProjectSubscriptionService from './components/ProjectSubscriptionService';
import FileUpload from './components/FileUpload'
import UserRoleService from './components/UserRoleService';

// Importa los componentes para cada microservicio
import CreateUser from './components/CreateUser';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';
import ReadUser from './components/ReadUser';

import CreateCommentary from './components/CreateCommentary';
import DeleteCommentary from './components/DeleteCommentary';
import UpdateCommentary from './components/UpdateCommentary';
import ReadCommentaries from './components/ReadCommentaries';

import CreateDocument from './components/CreateDocument';
import DeleteDocument from './components/DeleteDocument';
import UpdateDocument from './components/UpdateDocument';
import ReadDocument from './components/ReadDocument';

import CreateProject from './components/CreateProject';
import DeleteProject from './components/DeleteProject';
import UpdateProject from './components/UpdateProject';
import ReadProject from './components/ReadProject';


function App() {
  return (
    <Router>
      <div>
        <h1>Microservices Frontend</h1>
        <nav>
          <ul>
            <li><Link to="/readtask-service">Read Task</Link></li>
            <li><Link to="/createtask-service">Create Task</Link></li>
            <li><Link to="/user-role-service">User Role Service</Link></li>
          <li><Link to="/chat-service">Chat</Link></li>
          <li><Link to="/projectSubscriptionService">Project Subscription Service</Link></li>
          <li><Link to="/files">File Upload</Link></li>

            {/* Enlaces para los microservicios de usuarios */}
            <li><Link to="/create-user">Create User</Link></li>
            <li><Link to="/delete-user">Delete User</Link></li>
            <li><Link to="/update-user">Update User</Link></li>
            <li><Link to="/read-user">Read User PENDIENTE</Link></li>

            {/* Enlaces para los microservicios de comentarios */}
            <li><Link to="/createcommentary">Create Commentary</Link></li>
            <li><Link to="/deletecommentary">Delete Commentary</Link></li>
            <li><Link to="/updatecommentary">Update Commentary</Link></li>
            <li><Link to="/readcommentaries">Read Commentaries</Link></li>

            {/* Enlaces para los microservicios de documentos */}
            <li><Link to="/createdocument">Create Document</Link></li>
            <li><Link to="/deletedocument">Delete Document</Link></li>
            <li><Link to="/updatedocument">Update Document</Link></li>
            <li><Link to="/readdocument">Read Document</Link></li>

            {/* Enlaces para los microservicios de proyectos */}
            <li><Link to="/createproject">Create Project</Link></li>
            <li><Link to="/deleteproject">Delete Project</Link></li>
            <li><Link to="/updateproject">Update Project</Link></li>
            <li><Link to="/readproject">Read Project</Link></li>

           
          </ul>
        </nav>

        <Routes>

        <Route path="/readtask-service" element={<ReadTask />} />
        <Route path="/createtask-service" element={<CreateTask />} />
        <Route path="/user-role-service" element={<UserRoleService />} />
        <Route path="/chat-service" element={<Chat />} />
        <Route path="/projectSubscriptionService" element={<ProjectSubscriptionService />} />


          {/* Rutas para gestionar usuarios */}
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/read-user" element={<ReadUser />} />

          {/* Rutas para gestionar comentarios */}
          <Route path="/createcommentary" element={<CreateCommentary />} />
          <Route path="/deletecommentary" element={<DeleteCommentary />} />
          <Route path="/updatecommentary" element={<UpdateCommentary />} />
          <Route path="/readcommentaries" element={<ReadCommentaries />} />

          {/* Rutas para gestionar documentos */}
          <Route path="/createdocument" element={<CreateDocument />} />
          <Route path="/deletedocument" element={<DeleteDocument />} />
          <Route path="/updatedocument" element={<UpdateDocument />} />
          <Route path="/readdocument" element={<ReadDocument />} />

          {/* Rutas para gestionar proyectos */}
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/deleteproject" element={<DeleteProject />} />
          <Route path="/updateproject" element={<UpdateProject />} />
          <Route path="/readproject" element={<ReadProject />} />

          <Route path="/files" element={<FileUpload />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
