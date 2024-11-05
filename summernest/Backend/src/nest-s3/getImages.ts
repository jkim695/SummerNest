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
  const { newImageData, metadata } = JSON.parse(event.body);

  try {
    // Retrieve the existing S3 Key from PostgreSQL
    const result = await db.query('SELECT s3_key FROM images WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Image not found' }),
      };
    }

    const s3Key = result.rows[0].s3_key;

    // Update image in S3 if new image data is provided
    if (newImageData) {
      const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME as string,
        Key: s3Key,
        Body: Buffer.from(newImageData, 'base64'),
        ContentType: metadata.contentType as string,
      };
      await s3.upload(s3Params).promise();
    }

    // Update metadata in PostgreSQL
    await db.query('UPDATE images SET metadata = $1 WHERE id = $2', [metadata, id]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image updated successfully' }),
    };
  } catch (error) {
    console.error('Error updating image:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update image' }),
    };
  }
};
