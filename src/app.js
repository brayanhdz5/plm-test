import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", " GET, POST, PUT, OPTIONS, PATCH");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router instance
import User_Router from './api/users.routes';
app.use('/api/v1', User_Router);


export default app;