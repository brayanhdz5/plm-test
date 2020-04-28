# PLM  users Api

## By: Brayan Hernández

## HTML Forms

- in the plmformtest folder you can find and html file, you can use postman for test the api too

## REST API

### 1. Specs

- Node.js
- Sequelize
- Mysql
- ES6
- Babel

### 2. Starting the server

- Step 1. Mysql
  you must have a mysql instance either with xampp or which database manager

- Step 2. Create a Clean Database  
  you must create a clean database (must not have tables) called 'plm-test' the api will take care of the rest of the configuration at the time of starting

- Step 3. Install  dependencies
   on the Root of the project you have to run `npm install`

- Step 4. Starting scripts
  `npm run dev` this run the project with nodemon
  `npm run build` script for compile the project for production
  `npm start` after build the project you can use this comand for run the project in a server with nodemon

### 3. Endpoints Available

- Base URL: <https://localhost:4000/api/v1/>

- /get_users
  METHOD:GET (brings all users on the Database)

- /get_users_byId/:id
  METHOD:GET (search users by in on the database)

- /create_users
  METHOD:POST
  Body: nombre(STRING) apellido(STRING) numeroDocumento(STRING) CorreoElectronico(STRING) celular(STRING) fechaNacimiento(DATE)

- /update_users/:id
  METHOD:PUT
  Body: nombre(STRING) apellido(STRING) numeroDocumento(STRING) CorreoElectronico(STRING) celular(STRING) fechaNacimiento(DATE)

- /delete_users/:id
  METHOD:DELETE
