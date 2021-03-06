import express from 'express';
import routes from './routes';
import { initDb, getDb } from './db';
import config from './config';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors())

const port = config.port;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 

initDb((err) => {
  if(err) throw err;
  app.listen(port, (err) => {
    if(err) throw err;
    console.log(`The backend is sucessfully listening on port ${port}`)
    routes(app);
  })
})

app.get('/', (req, res) => {
  res.status(200).send('hi').json();
})

