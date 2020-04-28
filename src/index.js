import app from './app';
import db from './database/db.config';


// this script will remove all data from the Database server and re-create a new DB
db.sequelize.sync({ force: true }).then(() => {
}).then(() => {
  db.doctype_seeders.initial();
  console.log('DB is Created');
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
  console.log(`server on port ${PORT}`);
});