import { Client } from 'pg';
import dotenv from 'dotenv';

// Load environment variables (only required if developing locally)
dotenv.config();

// Create a reusable client instance
const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }, // Enable or disable SSL as needed
});

// Connect once and reuse the client instance
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Database connection error', err));

export default client;
