<div style="text-align: center;">
    <a href="https://www.uce.edu.ec/">
        <img src="https://th.bing.com/th/id/OIP.K6VZj13Ib8CVgRii6EUMcwAAAA?rs=1&pid=ImgDetMain" alt="Universidad Central del Ecuador">
    </a>
</div>

# Project Management Platform with 23 Microservices

## Problem

The goal is to develop a Project Management System using a microservices-based architecture. Each microservice is designed to perform a specific function, utilizing MySQL and MongoDB Atlas as databases. Additionally, the system is containerized with Docker and deployed on EC2 in AWS.

### Built With

This multirepo was built using a variety of technologies, including Express.js, Axios, JavaScript, TypeScript, Go, gRPC, Kafka, and MongoDB Atlas.

* [![Express][Express]][Express-url]
* [![Ioredis][Ioredis]][Ioredis-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![JsonWebToken][JsonWebToken-url]][JsonWebToken-url]
* [![Go][Go]][Go-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![gRPC][gRPC]][gRPC-url]
* [![Kafka][Kafka]][Kafka-url]
* [![MongoDB][MongoDB]][MongoDB-url]

## Project Structure

This project is composed of 23 microservices:

1. **Create User Service** (`create-user`): Handles the creation of new users.
   - **Endpoints**:
     - `POST /users`: Create a new user.

2. **Create Commentary Service** (`createcommentary`): Manages the creation of comments associated with projects.
   - **Endpoints**:
     - `POST /commentaries`: Create a new commentary.

3. **Create Document Service** (`createdocument`): Manages the creation of documents within projects.
   - **Endpoints**:
     - `POST /documents`: Create a new document.

4. **Create Project Service** (`createproject`): Manages the creation of new projects.
   - **Endpoints**:
     - `POST /projects`: Create a new project.

5. **Delete User Service** (`delete-user`): Handles the deletion of users.
   - **Endpoints**:
     - `DELETE /users/{id}`: Delete a user by ID.

6. **Delete Commentary Service** (`deletecommentary`): Manages the deletion of comments.
   - **Endpoints**:
     - `DELETE /commentaries/{id}`: Delete a commentary by ID.

7. **Delete Document Service** (`deletedocument`): Manages the deletion of documents.
   - **Endpoints**:
     - `DELETE /documents/{id}`: Delete a document by ID.

8. **Delete Project Service** (`deleteproject`): Manages the deletion of projects.
   - **Endpoints**:
     - `DELETE /projects/{id}`: Delete a project by ID.

9. **Chat Service** (`chat`): Enables real-time communication between users within the platform using Kafka and WebSocket.
   - **Endpoints**:
     - `GET /chat`: Establish a WebSocket connection for chat.

   - **Installation Dependencies**:
     - **Language**: Go
     - **Dependencies**:
       ```sh
       go get github.com/gorilla/websocket
       go get github.com/confluentinc/confluent-kafka-go/kafka
       ```

10. **Project Subscription Service** (`projectSubscriptionService`): Allows users to subscribe to projects. This service uses Kafka to manage subscriptions and notifications.
    - **Endpoints**:
      - `POST /subscriptions`: Subscribe to a project.
      - `DELETE /subscriptions/{id}`: Unsubscribe from a project.

11. **Read Commentaries Service** (`readcommentaries`): Retrieves comments associated with projects.
    - **Endpoints**:
      - `GET /commentaries/{id}`: Retrieve a commentary by ID.

12. **User Role Service** (`user-role-service`): Assigns roles to users (admin or regular user). This service is built with MongoDB Atlas.
    - **Endpoints**:
      - `POST /roles`: Assign roles to a user.
    - **Database**: 
      - **MongoDB Atlas**: A cloud-based, fully managed database service providing high availability, security, and scalability.

13. **Read Project Service** (`readproject`): Retrieves project details.
    - **Endpoints**:
      - `GET /projects/{id}`: Retrieve project details by ID.

14. **Create Task Service** (`createtask-service`): Manages the creation of tasks within projects. This service is built using TypeScript.
    - **Endpoints**:
      - `POST /tasks`: Create a new task.
    - **Installation Dependencies**:
      - **Language**: TypeScript
      - **Dependencies**:
        ```sh
        npm install typescript ts-node @types/express @types/node
        ```

15. **Read Task Service** (`readtask-service`): Retrieves task details within projects. This service is implemented using gRPC.
    - **Endpoints**:
      - `GET /tasks/{id}`: Retrieve task details by ID.
    - **Installation Dependencies**:
      - **gRPC**: Requires `grpc` and `proto-loader`.
      - **Dependencies**:
        ```sh
        npm install @grpc/grpc-js @grpc/proto-loader
        ```

16. **Update User Service** (`update-user`): Handles updating user information.
    - **Endpoints**:
      - `PUT /users/{id}`: Update user information by ID.

17. **Update Commentary Service** (`updatecommentary`): Manages updating comments.
    - **Endpoints**:
      - `PUT /commentaries/{id}`: Update commentary by ID.

18. **Update Document Service** (`updatedocument`): Manages updating documents within projects.
    - **Endpoints**:
      - `PUT /documents/{id}`: Update document information by ID.

19. **Update Project Service** (`updateproject`): Manages updating project details.
    - **Endpoints**:
      - `PUT /projects/{id}`: Update project details by ID.

20. **Create Task Service** (`createtask-service`): Manages the creation of tasks within projects.
    - **Endpoints**:
      - `POST /tasks`: Create a new task.

21. **Read User Service** (`read-user`): Retrieves user information within the system. This service is built using Python.
    - **Endpoints**:
      - `GET /users/{id}`: Retrieve user details by ID.
    - **Installation Dependencies**:
      - **Language**: Python
      - **Dependencies**:
        ```sh
        pip install flask pymysql
        ```

### Usage Overview

In summary, the user logs in with the `login` service, which then allows them to create users and use the other microservices. Documents can only be created if the user and project exist, comments can be created if the user and project exist, and subscriptions to projects can be done if both the user and the project exist. The user can then update their respective projects, users, documents, comments, and tasks if they exist, and finally, roles (admin or user) can be assigned to users who are registered in the system.

### Prerequisites

You must have Docker Desktop installed on your computer due to the use of Docker Compose, as well as Postman, and the latest version of npm.

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
   cd docker
   docker-compose up --build
   ```
4. You can push the project to use the CI/CD for DigitalOcean and use the microservices
   ```sh
   Only commit and push the project to use the CI/CD and go to EC2 AWS
   ```

## Usage

**In Localhost**

- Go to the .env and change the REACT_APP_API_URL and paste
```sh
http://localhost
```
1. **Using the frontend**:
- Open the frontend folder and run the following command to start the frontend server:
- Paste the following command in the terminal
- $env:NODE_OPTIONS = "--openssl-legacy-provider"
Then in terminal
    ```sh
     npm start
    ```

2. **Using the microservices in python**:
- Open other terminal an paste the following command to start the python microservice (read-user)
 ```sh
 cd read-user
venv\Scripts\activate
python app.py
```
3. **Using the microservices in golang**:
- Open other terminal an paste the following command to start the golang microservice (chat-service)
 ```sh

cd chat-service
go run main.go
```

**In Docker-compose**
- In terminal put the following command:
 ```sh

cd docker
docker-compose up --build
```
- And go to the browser and write in the URL
 ```sh
REACT_APP_API_URL=http://localhost
```

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
