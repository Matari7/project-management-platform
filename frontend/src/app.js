// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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

import NotificationHistory from './components/NotificationHistory';
import ReceiveNotification from './components/ReceiveNotification';
import SendNotification from './components/SendNotification';

import AuditService from './components/AuditService'; // Ejemplo para un microservicio adicional
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <h1>Microservices Frontend</h1>
        <nav>
          <ul>
          <li><Link to="/login">Login</Link></li>
            {/* Enlaces para los microservicios de usuarios */}
            <li><Link to="/create-user">Create User</Link></li>
            <li><Link to="/delete-user">Delete User</Link></li>
            <li><Link to="/update-user">Update User</Link></li>
            <li><Link to="/read-user">Read User</Link></li>

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

            {/* Enlaces para los microservicios de notificaciones */}
            <li><Link to="/notificationhistory">Notification History</Link></li>
            <li><Link to="/receivenotification">Receive Notification</Link></li>
            <li><Link to="/sendnotification">Send Notification</Link></li>

            {/* Enlace para el servicio de auditoría */}
            <li><Link to="/audit-service">Audit Service</Link></li>
          </ul>
        </nav>

        <Routes>

        <Route path="/login" element={<Login />} />

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

          {/* Rutas para notificaciones */}
          <Route path="/notificationhistory" element={<NotificationHistory />} />
          <Route path="/receivenotification" element={<ReceiveNotification />} />
          <Route path="/sendnotification" element={<SendNotification />} />

          {/* Ruta para el servicio de auditoría */}
          <Route path="/audit-service" element={<AuditService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
