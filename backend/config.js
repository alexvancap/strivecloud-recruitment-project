import dotenv from 'dotenv';

dotenv.config();

export default {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  secret: process.env.SECRET
};