const env = {
  database: 'plm-test',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  timezone: 'America/Bogota',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
};


export default env;

