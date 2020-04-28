import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './users.controllers'

const Router = express.Router();

  Router.get('/get_users', getUsers);
  Router.get('/get_users_byId/:id', getUserById);
  Router.post('/create_users', createUser);
  Router.put('/update_users/:id', updateUser);
  Router.delete('/delete_users/:id', deleteUser);

export default Router;