import pgPromise from "pg-promise";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const pgp = pgPromise();

// Connect to the PostgreSQL database
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
});

// // Test the connection with a query
// db.any('SELECT NOW()') // Checking- testing the current time from the database
//   .then((data) => {
//     console.log('Connected to the database');
//     console.log('Database time:', data); // Prints the current time from the DB
//   })
//   .catch((err) => {
//     console.error('Database connection error:', err.message);
//   });

export default db;

