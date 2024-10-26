import { Client } from 'pg';

// PostgreSQL connection configuration
const client = new Client({
  host: 'your-rds-endpoint.amazonaws.com', // Replace with your RDS endpoint
  port: 5432, // Default PostgreSQL port
  user: 'your_username', // Your PostgreSQL username
  password: 'your_password', // Your PostgreSQL password
  database: 'your_database_name', // Your PostgreSQL database name
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database!');

    // Example query
    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0]);
  } catch (error) {
    console.error('Database connection error:', error);
  } finally {
    await client.end(); // Close the connection
  }
};

connectToDatabase();
