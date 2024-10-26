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
      Bucket: 'summer-nest-bucket',
      Key: `images/${filename}`,
      Expires: 60,  // URL expiration time in seconds
    };

    // Generate a signed URL for retrieving the image
    const url = s3.getSignedUrl('getObject', params);

    return {
      statusCode: 200,
      body: JSON.stringify({ imageUrl: url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving image', error }),
    };
  }
};
