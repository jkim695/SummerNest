import { S3 } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';

const s3 = new S3();

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const filename = event.queryStringParameters?.filename;

    if (!filename) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Filename query parameter is missing' }),
      };
    }

    const params = {
      Bucket: 'your-bucket-name',
      Key: `images/${filename}`,
    };

    // Delete the image from the S3 bucket
    await s3.deleteObject(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image deleted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error deleting image', error }),
    };
  }
};
