import { S3 } from 'aws-sdk';
import { Client } from 'pg';
let db: Client;
if (process.env.AWS_EXECUTION_ENV) {
  db = require('/opt/nodejs/db').default; // Lambda environment
} else {
  db = require('..db-lambda-layer/nodejs/db').default; // Local path for development
}

const s3 = new S3();

export const handler = async (event: any) => {
  const { id } = event.pathParameters;

  try {
    // Retrieve the S3 Key from the PostgreSQL database
    const result = await db.query('SELECT s3_key FROM images WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Image not found' }),
      };
    }

    const s3Key = result.rows[0].s3_key;

    // Delete the image from S3
    await s3.deleteObject({
      Bucket: process.env.S3_BUCKET_NAME as string,
      Key: s3Key,
    }).promise();

    // Delete the record from PostgreSQL
    await db.query('DELETE FROM images WHERE id = $1', [id]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image deleted successfully' }),
    };
  } catch (error) {
    console.error('Error deleting image:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to delete image' }),
    };
  }
};
