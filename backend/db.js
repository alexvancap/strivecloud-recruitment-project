import mysql from "mysql"; // to make querries to the database
import config from "./config"; // imports login info from config.js
console.log(config)

const { dbHost, dbUser, dbPass, dbName } = config;

// Creates a connection to the mysql database
const connection = mysql.createConnection({
  host: dbHost, // database hostname
  user: dbUser, // database username
  password: dbPass, // database password
  database: dbName, // database name
});

// opens the MySQL connection and displays errors if necesary
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// exports the connection
export default connection;