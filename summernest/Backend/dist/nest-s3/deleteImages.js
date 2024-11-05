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
    var _a;
    try {
        const filename = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.filename;
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
        yield s3.deleteObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Image deleted successfully' }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error deleting image', error }),
        };
    }
});
exports.handler = handler;
