import { getDb } from '../db';

const getById = (id, response) => {
  const db = getDb();
  db.query(
    `SELECT username, first_name, last_name, email FROM users WHERE id = ?`, [id],
    (err, res) => response(err, res)
  );
};

const getByUsername = (username, response) => {
  const db = getDb();
  db.query(
    'SELECT * FROM users WHERE username = ?', [username],
    (err, res) => response(err, res)
  );
};

const create = (values, response) => {
  const db = getDb(); // i get the current database connection
  // and create a query to the database wich returns an error or user to the model
  db.query(
    'INSERT INTO users (username, email, first_name, last_name, password)\
    VALUES(?, ?, ?, ?, ?)',
    [values.username, values.email, values.firstName, values.lastName, values.password],
    (err, res) => {
      response(err, res)
    }
  );
};

export default { getById, getByUsername, create };