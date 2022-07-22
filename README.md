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
      <img src="https://img.shields.io/badge/Testing-100%-green.svg" />
   </a>
</p>

# Usage (run fullstack app on your machine)

## Prerequisites - Incase using docker-compose.yaml

    - Docker

## Client-side usage(PORT: 4200) - Angular

> Please check the IP set in proxy.conf.json file of frontend folder, this should point to where the backend Nodejs application is running

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
