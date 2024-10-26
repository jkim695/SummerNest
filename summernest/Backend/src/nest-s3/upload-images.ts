import { S3 } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';

const s3 = new S3();

interface UploadRequest {
  filename: string;
  image: string; // base64 encoded image string
}

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    // Parse the body of the request
    const body: UploadRequest = JSON.parse(event.body as string);
    const imageContent = Buffer.from(body.image, 'base64');  // Decode base64 image content
    
    const params = {
      Bucket: 'summer-nest-bucket',  // Your S3 bucket name
      Key: `images/${body.filename}`,  // Path and filename in the S3 bucket
      Body: imageContent,  // Image content
      ContentEncoding: 'base64',  // Image encoding
      ContentType: 'image/jpeg'  // Image MIME type (adjust if necessary)
    };

    // Upload image to S3
    await s3.putObject(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image uploaded successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Image upload failed', error }),
    };
  }
};
