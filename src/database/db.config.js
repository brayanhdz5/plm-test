import Sequelize from 'sequelize';
import env  from './db.env'

// Sequelize Instance
const sequelize = new Sequelize(env.database, env.username, env.password, {

  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
  timezone: env.timezone,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },

  define: {
    charset: env.define.charset,
    dialectOptions: {
      collate: env.define.dialectOptions.collate,
    },
    timestamps: env.define.timestamps,
  }

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Model's Imports
db.users = require('./models/users.model')(sequelize, Sequelize);
db.doctypes = require('./models/doctypes.model')(sequelize, Sequelize);

// DB relationships
db.doctypes.hasMany(db.users, { foreignKey: 'doctypeId', sourceKey: 'id' });
db.users.belongsTo(db.doctypes, { foreignKey: 'doctypeId', targetKey: 'id' });


// Seeders
db.doctype_seeders = require('./seeders/doctypes.seeder')(db.doctypes);

export default db;
