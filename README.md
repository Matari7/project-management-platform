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

This project is made up of three microservices:

1. **User services**: User CRUD, user profiles, activity history.
2. **Project services**: Project CRUD, team member assignment.
3. **Document services**: Storage and management of project-related documents.
4. **Notification services**: Send notifications or messages within the platform about important updates.
5. **Audit services**: Record of all important actions for audit and follow-up.

Additionally, the project uses Redis as shared storage for the pets.

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
4. You can push the project to use de CI/CD for EC2 and use the microservices
   ```sh
   Only commit and push the project to use the CI/CD and go to EC2 AWS
   ```


<!-- USAGE EXAMPLES -->
## Usage

We can use 

1. Open Postman and add the following URL in the POST method:
```sh
http://localhost:3018/createprojects
```
2. Add the following body in the JSON format:
```sh
{
  "name": "Fidoe",
  "breed": "Labrador",
  "gender": "Macho"
}

```
3. Click on the Send button and you will see the following response:

'Pet added'

4. To review the created pets, just change the endpoint to and switch to the GET method.

```sh
http://localhost:3001/pets
```

5. To use the login microservice, we just need to create a new tab and put the following URL in the method:
```sh
http://localhost:3002/login
```

5. To log in, you just need to copy the same JSON of the created user in the code like this:
```sh
{
  "username": "admin",
  "password": "password"
}
```
6. Click on the Send button and you will see the following response:

Once logged in, you will get a JSON message with the token that lasts only 1 hour

7. After the token that the system will provide you, you are going to put it in Authorization and in Bearer Token you paste the received token

![Captura de pantalla](https://i.imgur.com/BW8qBIx.png)
 <!-- CONTRIBUTING -->
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