module.exports = (sequelize, Sequelize) => {
  
  const DocType = sequelize.define('doctypes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING,
    }
  });

  return DocType;
};