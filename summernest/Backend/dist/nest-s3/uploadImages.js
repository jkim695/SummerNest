"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
const s3 = new aws_sdk_1.S3();
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Parse the body of the request
        const body = JSON.parse(event.body);
        const imageContent = Buffer.from(body.image, 'base64'); // Decode base64 image content
        const params = {
            Bucket: 'summer-nest-bucket', // Your S3 bucket name
            Key: `images/${body.filename}`, // Path and filename in the S3 bucket
            Body: imageContent, // Image content
            ContentEncoding: 'base64', // Image encoding
            ContentType: 'image/jpeg' // Image MIME type (adjust if necessary)
        };
        // Upload image to S3
        yield s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Image uploaded successfully!' }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Image upload failed', error }),
        };
    }
});
exports.handler = handler;
