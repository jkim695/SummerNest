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
let db;
if (process.env.AWS_EXECUTION_ENV) {
    db = require('/opt/nodejs/db').default; // Lambda environment
}
else {
    db = require('..db-lambda-layer/nodejs/db').default; // Local path for development
}
const s3 = new aws_sdk_1.S3();
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageData, metadata } = JSON.parse(event.body);
    // Upload image to S3
    const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME, // Ensure this is defined
        Key: `images/${Date.now()}-${metadata.fileName}`,
        Body: Buffer.from(imageData, 'base64'),
        ContentType: metadata.contentType, // Explicitly cast as string
    };
    // Optional: Add a check to confirm that Bucket is defined.
    if (!s3Params.Bucket) {
        throw new Error("S3_BUCKET_NAME is not defined in environment variables");
    }
    const s3Response = yield s3.upload(s3Params).promise();
    // Insert URL into PostgreSQL
    yield db.connect();
    yield db.query('INSERT INTO images (url, metadata) VALUES ($1, $2)', [s3Response.Location, metadata]);
    yield db.end();
    return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Image created', url: s3Response.Location }),
    };
});
exports.handler = handler;
