import db from '../database/db.config';

const User = db.users;
const DocType = db.doctypes;

// DB Operations
export const GetUsers = async () => {
  try {
    const users = await User.findAll({ include: [{ model: DocType }] });
    if (!users) {
      return null;
    }
    return users;
    
  }
  catch (err) {
    return null;
  }
}

export const GetUserById = async (id) => {
  try {
    const user = await User.findByPk(id, { include: [{ model: DocType }] })
    if (user == null) {
     return null;
    }
    return user;
  }
  catch (err) {
    return null;
  }
}

export const CreateUser = async (data) => {
  try {
    const Response = await User.create({
      nombre: data.nombre,
      apellido: data.lastName,
      numeroDocumento: data.numeroDocumento,
      CorreoElectronico: data.CorreoElectronico,
      celular: data.celular,
      fechaNacimiento: data.fechaNacimiento,
      doctypeId: data.doctypeId
  })

  if (!Response) {
      return null
  }
  return Response
  }
  catch (err) {
    return null;
  }
}

export const UpdateUser = async (id, data) => {
  try {
    const person = await User.findByPk(id)
    if (!person) {
        return null
    }
    const Response = await person.update({
        nombre: data.nombre,
        apellido: data.lastName,
        numeroDocumento: data.numeroDocumento,
        CorreoElectronico: data.CorreoElectronico,
        celular: data.celular,
        fechaNacimiento: data.fechaNacimiento,
        doctypeId: data.doctypeId
    })

    if (!Response) {
        return null
    }
    return Response
  }
  catch (err) {
    return null;
  }
}

export const DeleteUser = async (id) => {
  try {
   const deleted = await User.destroy({ where: { id: id } });
   if (!deleted) {
    return null;
   }
   return deleted;
  }
  catch (err) {
    return null;
  }
}