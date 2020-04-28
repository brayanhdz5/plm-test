import { SimpleRes, SimpleErrorRes } from './response.template';

import { GetUsers, GetUserById, CreateUser, UpdateUser, DeleteUser } from '../core/users.services';

export const getUsers = async (req, res) => {
  try {
    
    const data = await GetUsers();

    if (!data || data.length === 0) {
      SimpleErrorRes(res, 404,'we can´t find users', 'No users registered');
    }

    return SimpleRes(res, 200, 'users', data);
  }
  catch (err) {
    SimpleErrorRes(res, 500, 'Internal Server Error', err);
    throw err;
  }
}

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await GetUserById(id);

    if (!data || data.length === 0) {
      return SimpleErrorRes(res, 404,'we can´t find the user', 'user does not exists');
    }
    return SimpleRes(res, 200, 'user', data);
  }
  catch (err) {
    SimpleErrorRes(res, 500, 'Internal Server Error', err);
    throw err;
  }
}

export const createUser = async (req, res) => {
  try {
    const data = {    
        nombre: nombre,
        apellido: lastName,
        numeroDocumento: numeroDocumento,
        CorreoElectronico: CorreoElectronico,
        celular: celular,
        fechaNacimiento: fechaNacimiento,
        doctypeId: doctypeId  
    } = req.body
    
    const created = await CreateUser(data);

    if(!created) {
      return SimpleErrorRes(res, 404,'we can´t create the user', 'sometime wrong');
    }

    return SimpleRes(res, 201, 'user created', data);
  }
  catch (err) {
    SimpleErrorRes(res, 500, 'Internal Server Error', err);
    throw err;
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = {    
      nombre: nombre,
      apellido: lastName,
      numeroDocumento: numeroDocumento,
      CorreoElectronico: CorreoElectronico,
      celular: celular,
      fechaNacimiento: fechaNacimiento,
      doctypeId: doctypeId  
    } = req.body

    const updated = await UpdateUser(id,data);

    if (!updated) {
      return SimpleErrorRes(res, 404,'we can´t edit the user', 'sometime wrong');
    }
    return SimpleRes(res, 201, 'user updated', data);
  }
  catch (err) {
    SimpleErrorRes(res, 500, 'Internal Server Error', err);
    throw err;
  }
}

export const deleteUser = async (req, res) => {
  try {
  
    const id = req.params.id;
    const data = await DeleteUser(id);

    if (!data) {
     return SimpleErrorRes(res, 400,'we can´t delete the user', 'something wrong');
    }
    return SimpleRes(res, 200, 'user delete', data);
  }
  catch (err) {
    SimpleErrorRes(res, 500, 'Internal Server Error', err);
    throw err;
  }
}