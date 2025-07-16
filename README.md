# SummerNest

# App.js 

Contains all of the pathing for each of webpages.

# HomePage.js

Supported by HomePage.css, it contains the homepage. Has a description of how to use the webpage.

In the future, we should get rid of this search feature and instead have a better
UI that tells the user how to use our website.

# BrowseListings.js

Supported by BrowseListings.css, it contains the search feature and the featured
listings. 

In the future, it should be able to dynamically handle the input of the search 
and have a section that says filtered results or something similar. 

# ListYourSpace.js

Supported by ListYourSpace.css, it contains a form that allows the user to input 
the necessary information for their lease. Right now, it displays all that 
information into the console. 

In the future, we should work with the backend to send that data to a database.
We should also look into researching how to have the display be different depending
on the username/password. Also dynamic updating so that it immediately gets
put onto the BrowseListings.js page.

# Login.js

Supported by Login.css, it contains a sample login screen. In the future, it will
be connected with the back end.

# SignUp.js

Supported by SignUp.css, it contains a sample signup screen. In the future, it will 
be connected with the back end

---

# Image API Documentation

This API provides CRUD operations for managing images stored in an S3 bucket, with metadata stored in a PostgreSQL database. The API allows users to create, read, update, and delete images.

## Endpoints and Functions

1. **POST /images** - `createImage`
2. **GET /images/{id}` - `readImage`
3. **PUT /images/{id}` - `updateImage`
4. **DELETE /images/{id}` - `deleteImage`

---

## POST /images (Create Image)

### Function: `createImage`

**Description**: Uploads a new image to S3 and stores its metadata in PostgreSQL.

- **Lambda Function File**: `createImage.ts`
- **HTTP Method**: `POST`
- **Request URL**: `/images`

### Request

**Headers**:
- `Content-Type`: `application/json`

**Body**:
```json
{
  "imageData": "base64-encoded-image-data",
  "metadata": {
    "fileName": "example.jpg",
    "contentType": "image/jpeg"
  }
}
```

### Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "message": "Image created",
    "url": "https://your-s3-bucket.s3.amazonaws.com/images/unique-id-example.jpg"
  }
  ```

---

## GET /images/{id} (Read Image)

### Function: `readImage`

**Description**: Retrieves metadata and the S3 URL of an image by its ID.

- **Lambda Function File**: `readImage.ts`
- **HTTP Method**: `GET`
- **Request URL**: `/images/{id}` (replace `{id}` with the actual image ID)

### Request

No request body is required.

**Example URL**:
```
GET /images/123
```

### Response

- **Status Code**: `200 OK` (or `404 Not Found` if the image doesn’t exist)
- **Body**:
  ```json
  {
    "id": "123",
    "url": "https://your-s3-bucket.s3.amazonaws.com/images/unique-id-example.jpg",
    "metadata": {
      "fileName": "example.jpg",
      "contentType": "image/jpeg"
    },
    "createdAt": "2024-01-01T12:00:00Z",
    "updatedAt": "2024-01-01T12:00:00Z"
  }
  ```

---

## PUT /images/{id} (Update Image)

### Function: `updateImage`

**Description**: Updates an image’s metadata or replaces the image in S3 by its ID.

- **Lambda Function File**: `updateImage.ts`
- **HTTP Method**: `PUT`
- **Request URL**: `/images/{id}` (replace `{id}` with the actual image ID)

### Request

**Headers**:
- `Content-Type`: `application/json`

**Body**:
```json
{
  "newImageData": "optional-base64-encoded-image-data",
  "metadata": {
    "fileName": "updated-example.jpg",
    "contentType": "image/jpeg"
  }
}
```

### Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Image updated successfully"
  }
  ```

---

## DELETE /images/{id} (Delete Image)

### Function: `deleteImage`

**Description**: Deletes an image from both S3 and PostgreSQL by its ID.

- **Lambda Function File**: `deleteImage.ts`
- **HTTP Method**: `DELETE`
- **Request URL**: `/images/{id}` (replace `{id}` with the actual image ID)

### Request

No request body is required.

**Example URL**:
```
DELETE /images/123
```

### Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Image deleted successfully"
  }
  ```

---

## Error Handling

For all endpoints, the API will return a standard error response if something goes wrong:

- **Status Code**: `400` or `500`
- **Body**:
  ```json
  {
    "error": "Error message explaining the issue"
  }
  ```

---

## Environment Variables

The Lambda functions use the following environment variables, which should be configured in your AWS Lambda console:

- **S3_BUCKET_NAME**: Name of the S3 bucket used for storing images.
- **DB_HOST**: Host address of the PostgreSQL database.
- **DB_PORT**: Port of the PostgreSQL database (usually `5432`).
- **DB_USER**: Username for PostgreSQL access.
- **DB_PASSWORD**: Password for PostgreSQL access.
- **DB_NAME**: Name of the PostgreSQL database.

---

11/4: Currently working on developing a simple web application that demos the functionality of our CRUD functions. 

How it works + stuff we need to do:

Upload code to lambda: ts code needs to be converted to js before uploading to lambda. 
- env variables need to be configured for our lambda-layer that connects to postgresql
- Read update and delete function code needs to be uploaded

Create APIs using API gateway
- We only need one API Resource for all 4 CRUD operations
- GPT'd definition of an API Resource: An API resource is a specific part or segment of a web API that represents a unique entity or collection of data that an API client can interact with. Each resource typically corresponds to a particular piece of data or a functional element within an API, like a user, an image, a document, or a transaction. In RESTful APIs, resources are identified by unique URLs and are manipulated using HTTP methods like GET, POST, PUT, and DELETE.
- Must configure body of our JSON so that we can parse it correctly to call our lambda functions seamlessly

