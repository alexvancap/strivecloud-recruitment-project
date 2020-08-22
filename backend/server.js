import express from 'express';
import config from './config';
import db from './db';
import {authRoutes} from './routes';

const app = express();
const port = 3000;

authRoutes(app);

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    res.status(200).send(result).json();
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})