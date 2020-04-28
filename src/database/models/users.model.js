module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING,
    },
    apellido: {
      type: Sequelize.STRING,
    },
    numeroDocumento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CorreoElectronico: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: false,
    },
    celular: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fechaNacimiento: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  /*  Imagen: {
      type: Sequelize.DATE,
      allowNull: true,
    },*/
  });

  return User;
};
