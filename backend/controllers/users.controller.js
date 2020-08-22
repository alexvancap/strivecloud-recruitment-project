import User from '../models/User.model';
import jwt from 'jsonwebtoken';
import config from './../config';

const login = (req, res) => {
  console.log('/login')
}

const register = (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  body.password = jwt.sign(body.password, config.secret);

  User.create(body, (err, user) => {
    if(err) res.status(500);
    res.status(200).json('lol');
  })
}

export default {
  login, register
}