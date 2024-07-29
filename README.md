<a href="https://www.uce.edu.ec/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Escudo_de_la_Universidad_Central_del_Ecuador_-_Andr%C3%A9s_Agual.png" alt="Universidad Central del Ecuador" style="width:70%;">
</a>


# Project Management Platform with 20 Microservices

## Problem

The goal is to develop a Project Management System using a microservices-based architecture. Each microservice should be designed to perform a specific function, and MySQL and DynamoDB should be used as databases. In addition, a containerization with Docker and deploy with EC2 in AWS

### Built With

This multirepo was built using the technologies of express, axios, and JavaScript.

* [![Express][Express]][Express-url]
* [![Ioredis][Ioredis]][Ioredis-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![JsonWebToken][JsonWebToken]][JsonWebToken-url]

## Project Structure

This project is made up of several microservices:

1. **User Services**: Handles user registration, authentication, and authorization. 
   - **Endpoints**:
     - `POST /users`: Create a new user.
     - `GET /users/{id}`: Retrieve user details.
     - `PUT /users/{id}`: Update user information.
     - `DELETE /users/{id}`: Delete a user.
2. **Project Services**: Manages project creation, updating, and task assignments.
   - **Endpoints**:
     - `POST /projects`: Create a new project.
     - `GET /projects/{id}`: Retrieve project details.
     - `PUT /projects/{id}`: Update project information.
     - `DELETE /projects/{id}`: Delete a project.
3. **Document Services**: Manages document creation, reading, updating, and deletion.
   - **Endpoints**:
     - `POST /documents`: Create a new document.
     - `GET /documents/{id}`: Retrieve document details.
     - `PUT /documents/{id}`: Update document information.
     - `DELETE /documents/{id}`: Delete a document.
4. **Notification Services**: Send notifications or messages within the platform about important updates.
5. **Audit Services**: Records audit logs for user actions within the system.

### Prerequisites

You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, and the latest version of npm.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)

* Windows Postman app version
[Postman](https://www.postman.com/downloads/)

### Installation

_This is the installation of the project._

1. Clone the repo.
   ```sh
   git clone https://github.com/Matari7/project-management-platform
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open the terminal and type the following command
   ```sh
   docker-compose up --build
   ```
4. You can push the project to use the CI/CD for EC2 and use the microservices
   ```sh
   Only commit and push the project to use the CI/CD and go to EC2 AWS
   ```

## Usage

1. **Creating Projects**:
   - Open Postman and add the following URL in the POST method:
     ```sh
     http://localhost:3018/createprojects
     ```
   - Add the following body in the JSON format:
     ```sh
     {
       "name": "New Project",
       "description": "Project description"
     }
     ```
   - Click on the Send button and you will see the following response:
     'Project added'

2. **Retrieving Projects**:
   - To review the created projects, change the endpoint to and switch to the GET method:
     ```sh
     http://localhost:3018/projects
     ```

3. **User Login**:
   - Open a new tab in Postman and put the following URL in the POST method:
     ```sh
     http://localhost:3002/login
     ```
   - To log in, use the following JSON for an existing user:
     ```sh
     {
       "username": "admin",
       "password": "password"
     }
     ```
   - Click on the Send button and you will see the following response with a JSON message containing the token that lasts only 1 hour.

4. **Using the Token**:
   - After receiving the token, go to the Authorization tab, select Bearer Token, and paste the received token.

![Screenshot](https://i.imgur.com/BW8qBIx.png)

## Microservices Explanation

### User Services
**Create User (POST /users)**
- **Description**: This endpoint creates a new user in the system.
- **URL**: `/users`
- **Method**: `POST`
- **Request Body**: 
  - `email`: string, required. Example: `user@example.com`
  - `password`: string, required. Example: `password123`
- **Responses**:
  - `201 Created`: User created successfully.
  - `400 Bad Request`: Request is missing required fields or has invalid data.
  - `500 Internal Server Error`: An error occurred on the server.

**Retrieve User (GET /users/{id})**
- **Description**: This endpoint retrieves the details of a user by their ID.
- **URL**: `/users/{id}`
- **Method**: `GET`
- **Path Parameter**: 
  - `id`: string, required. The ID of the user to retrieve.
- **Responses**:
  - `200 OK`: User details returned successfully.
  - `404 Not Found`: No user found with the provided ID.
  - `500 Internal Server Error`: An error occurred on the server.

**Update User (PUT /users/{id})**
- **Description**: This endpoint updates the information of an existing user.
- **URL**: `/users/{id}`
- **Method**: `PUT`
- **Path Parameter**: 
  - `id`: string, required. The ID of the user to update.
- **Request Body**: 
  - `email`: string, required. Example: `updated@example.com`
  - `password`: string, required. Example: `newpassword123`
- **Responses**:
  - `200 OK`: User updated successfully.
  - `400 Bad Request`: Request is missing required fields or has invalid data.
  - `500 Internal Server Error`: An error occurred on the server.

### Project Services
**Create Project (POST /projects)**
- **Description**: This endpoint creates a new project.
- **URL**: `/projects`
- **Method**: `POST`
- **Request Body**: 
  - `name`: string, required. Example: `New Project`
  - `description`: string, required. Example: `This is a new project.`
- **Responses**:
  - `201 Created`: Project created successfully.
  - `400 Bad Request`: Request is missing required fields or has invalid data.
  - `500 Internal Server Error`: An error occurred on the server.

**Retrieve Project (GET /projects/{id})**
- **Description**: This endpoint retrieves the details of a project by its ID.
- **URL**: `/projects/{id}`
- **Method**: `GET`
- **Path Parameter**: 
  - `id`: string, required. The ID of the project to retrieve.
- **Responses**:
  - `200 OK`: Project details returned successfully.
  - `404 Not Found`: No project found with the provided ID.
  - `500 Internal Server Error`: An error occurred on the server.

### Document Services
**Create Document (POST /documents)**
- **Description**: This endpoint allows the creation of a new document by providing the document name, path, and associated project ID.
- **URL**: `/documents`
- **Method**: `POST`
- **Request Body**: 
  - `name`: string, required. Example: `Project Proposal`
  - `path`: string, required. Example: `/documents/proposal.pdf`
  - `projectId`: string, required. Example: `1`
- **Responses**:
  - `201 Created`: Document created successfully.
  - `500 Internal Server Error`: An error occurred on the server.

**Read Document (GET /documents/{id})**
- **Description**: This endpoint retrieves a document by its ID.
- **URL**: `/documents/{id}`
- **Method**: `GET`
- **Path Parameter**: 
  - `id`: string, required. The ID of the document to retrieve.
- **Responses**:
  - `200 OK`: Document retrieved successfully.
  - `400 Bad Request`: Invalid document ID.
  - `404 Not Found`: Document not found.
  - `500 Internal Server Error`: An error occurred on the server.

**Update Document (PUT /documents/{id})**
- **Description**: This endpoint updates an existing document by its ID.
- **URL**: `/documents/{id}`
- **Method**: `PUT`
- **Path Parameter**: 
  - `id`: string, required. The ID of the document to update.
- **Request Body**: 
  - `name`: string, required. Example: `Updated Project Proposal`
  - `path`: string, required. Example: `/documents/updated_proposal.pdf`
  - `project_id`: string, required. Example: `1`
- **Responses**:
  - `200 OK`: Document updated successfully.
  - `400 Bad Request`: Invalid document ID.
  - `404 Not Found`: Document not found.
  - `500 Internal Server Error`: An error occurred on the server.

**Delete Document (DELETE /documents/{id})**
- **Description**: This endpoint deletes an existing document by its ID.
- **URL**: `/documents/{id}`
- **Method**: `DELETE`
- **Path Parameter**: 
  - `id`: string, required. The ID of the document to delete.
- **Responses**:
  - `204 No Content`: Document deleted successfully.
  - `400 Bad Request`: Invalid document ID.
  - `404 Not Found`: Document not found.
  - `500 Internal Server Error`: An error occurred on the server.

## Contributing

This project was carried out by the following collaborator:

* [Cristian Caiza](https://github.com/antichrist667)
* [Ariel Campoverde](https://github.com/Matari7)

<!-- MARKDOWN LINKS & IMAGES -->
[Express]: https://img.shields.io/badge/express-8A2BE2
[Express-url]: https://axios-http.com/docs/intro
[Ioredis]: https://img.shields.io/badge/Ioredis-FE146D
[Ioredis-url]: https://ioredis.readthedocs.io/en/stable/README/
[JavaScript]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[JavaScript-url]: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript
[JsonWebToken]: https://img.shields.io/badge/JsonWebToken-D5A000
[JsonWebToken-url]: https://jwt.io/introduction
