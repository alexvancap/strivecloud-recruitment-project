import { getDb } from '../db';

// const get = () => {
//   db.query(
//     `SELECT * FROM `
//   )
// }


const create = (values, response) => {
  const db = getDb();
  db.query(
    `INSERT INTO users \
    (username, email, first_name, last_name, password) \
    VALUES(?, ?, ?, ?, ?)`, 
    [values.username, values.email, values.firstName, values.lastName, values.password],
    (err) => response(err)
  )
};

export default { create };