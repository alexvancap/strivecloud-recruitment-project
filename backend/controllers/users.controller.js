import User from '../models/User.model';
import bcrypt from 'bcrypt';

const login = (req, res) => {
  const { username, password } = req.body;
  User.getByUsername(username, (err, foundUser) => {
    if(!err && foundUser[0]) bcrypt.compare(password, foundUser[0].password, (err, passwordMatches) => {
      if(!err && passwordMatches) {
        delete foundUser[0].password;
        return res.json({auth: true, foundUser: foundUser[0]});
      }
      else return res.status(400).json({auth: false, message: 'passwords did not match'});
    })
    else return res.status(400).json({auth: false, message: 'username not found'});
  })
}

const register = (req, res) => {
  let error = ''
  //I got the body trough bodyparser
  let { body } = req;
  // first I hash the password
  bcrypt.hash(body.password, 11, function(err, hash) {
    body.password = hash;
    //then I send the user data to the User model
    if(!err) User.create(body, (err, createRes) => {
      //I have to get the user back this way because my mysql server is outdated
      if(!err) User.getById(createRes.insertId, (err, newUser) => {
        if(!err) return res.json(newUser[0]);
        else return res.status(500).json(err);
      })
      else return res.status(500).json(err);
    })
    else return res.status(500).json(err);
    
  });
}

export default {
  login, register
}