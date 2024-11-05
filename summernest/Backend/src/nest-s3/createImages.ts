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
  const { imageData, metadata } = JSON.parse(event.body);

  // Upload image to S3
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME as string,  // Ensure this is defined
    Key: `images/${Date.now()}-${metadata.fileName}`,
    Body: Buffer.from(imageData, 'base64'),
    ContentType: metadata.contentType as string,  // Explicitly cast as string
  };
  
  // Optional: Add a check to confirm that Bucket is defined.
  if (!s3Params.Bucket) {
    throw new Error("S3_BUCKET_NAME is not defined in environment variables");
  }
  
  const s3Response = await s3.upload(s3Params).promise();
  
  // Insert URL into PostgreSQL
  await db.connect();
  await db.query('INSERT INTO images (url, metadata) VALUES ($1, $2)', [s3Response.Location, metadata]);
  await db.end();

  return {
    statusCode: 201,
    body: JSON.stringify({ message: 'Image created', url: s3Response.Location }),
  };
};
