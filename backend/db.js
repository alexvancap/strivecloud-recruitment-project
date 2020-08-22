import mysql from "mysql"; // to make querries to the database
import config from "./config"; // imports login info from config.js

const { dbHost, dbUser, dbPass, dbName } = config;

// this will hold the database conection troughout the lifetime of my app
let _db;

// Creates a connection to the mysql database
const initDb = (callback) => {
  if(_db) return _db
  let connection =  mysql.createConnection({
    host: dbHost, // database hostname
    user: dbUser, // database username
    password: dbPass, // database password
    database: dbName, // database name
  });

    // opens the MySQL connection and displays errors if necesary
  connection.connect(error => {
    if (error) return callback(error, null);
    _db = connection;
    callback(null, error);
  });
  return _db;
}

// gets the database connection
const getDb = () => _db;

// exports the connection
export { initDb, getDb };