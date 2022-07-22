<h1 align="center">
 URL Shortner Application In MEAN Stack.
</h1>
<p align="center">
MongoDB, Expressjs, Angular, Nodejs
</p>

<p align="center">
   <a href="https://app.circleci.com/pipelines/github/Nikhil024/lowes-assignment">
      <img src="https://circleci.com/gh/Nikhil024/lowes-assignment.svg?style=svg" />
   </a>
   <a href="https://github.com/Nikhil024/lowes-assignment/blob/develop/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
      <a href="https://github.com/Nikhil024/lowes-assignment/blob/develop">
      <img src="https://img.shields.io/badge/Testing-100%25-green.svg" />
   </a>
</p>

# Usage (run fullstack app on your machine)

## Prerequisites - Incase using docker-compose.yaml

    - Docker Compose
    - Docker

> To run using docker-compose commands below, this will start up the stack in containers

```terminal
    - git clone https://github.com/Nikhil024/lowes-assignment.git
    - docker-compose up -d
```

> Use below command to check for logs after docker compose command is run

```terminal
    - docker-compose logs -f
```

## Client-side usage(PORT: 4200) - Angular

> Please check the IP set in proxy.conf.json file of frontend folder, this should point to where the backend Nodejs application is running

> If running via host mode, replace the below param with localhost or 0.0.0.0

```terminal
 - host.docker.internal
```

```terminal
    - cd frontend/
    - npm install
    - npm start
```

## Server-side usage(PORT: 8080) - NodeJS

> create a new file in backend/ directory with name as .env which will have the below attributes or pass these as environment variables

```terminal
    - SERVER_PORT=
    - MONGO_URI=
```

```terminal
    - cd backend/
    - npm install
    - npm start
```

## Docker Hub Image Links

    - Backend: https://hub.docker.com/repository/docker/nikhilmohandas/backend
    - Frontend: https://hub.docker.com/repository/docker/nikhilmohandas/frontend

## Command to run directly from docker containers

### Frontend

```terminal
    - docker run -p 4200:4200 --add-host=host.docker.internal:host-gateway nikhilmohandas/frontend:latest
```

### Backend

```terminal
    - docker run -p 8080:8080 -e SERVER_PORT=8080 -e MONGO_URI=<MONGODB URL> nikhilmohandas/backend:latest
```
