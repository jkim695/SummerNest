import { S3 } from 'aws-sdk';
import { Client } from 'pg';

let db: Client;
if (process.env.AWS_EXECUTION_ENV) {
  db = require('/opt/nodejs/db').default; // Lambda environment
} else {
  db = require('..db-lambda-layer/nodejs/db').default; // Local path for development
}


export const handler = async (event: any) => {
  const { id } = event.pathParameters;

  try {
    // Query the database for the image metadata and URL
    const result = await db.query('SELECT * FROM images WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Image not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows[0]),
    };
  } catch (error) {
    console.error('Error reading image:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve image' }),
    };
  }
};
