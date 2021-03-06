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
  //I got the body trough bodyparser
  let { body } = req;
  body.first_name = body.first_name
  body.last_name = body.last_name
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

const update = (req, res) => {
  let { body } = req;
  if(body.password){
    bcrypt.hash(body.password, 11, function(err, hash) {
      body.password = hash;
      User.update(body, (err, response) => {
        if(!err) return res.json({success: true, data: body})
        return res.status(500).json(err)
      })
    })
  }else
    User.update(body, (err, response) => {
      if(!err) return res.json({success: true, data: body})
      return res.status(500).json(err)
    })
}

export default {
  login, register, update
}