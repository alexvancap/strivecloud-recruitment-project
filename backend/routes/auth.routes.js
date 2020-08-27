import users from './../controllers/users.controller';

export default (app) => {
  app
    .post('/login', (req, res) => users.login(req, res))
    .post('/register', (req, res) => users.register(req, res))
    .patch('/users', (req, res) => users.update(req, res))
}