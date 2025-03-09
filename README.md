# NodeJS-Microservice README

## Introduction

This is a simple microservice project with 3 services and a communicator. To try out this project follow the following instructions.

## Requirements & Installations
You need to install NodeJS, Mongodb and Mongosh on your machine before running this project. After installing NodejS you may install nodemon globally as it would be needed for the services(npm install -g nodemon)

## Run the microservices

To run the project, follow these steps:

1.  Clone the repository:
    ```bash
    git clone git@github.com:amiths89/NodeJS-Microservice.git
    ```
2.  Run the following commands and repeat in all the services inlcuding the communictor(However mongodb and mongoose is required only for certain services in this example):
    ```bash
    npm install axios express mongodb mongoose
    npm install --save-dev nodemon
    ```

## Usage

Here's how to use the application:

1.  Browse to communicator folder and run command line and run the command npm run dev.
2.  Repeat the above step for all 3 services in separate command line interfaces and keep it running.
3.  Open Postman and send a POST request using the URL http://localhost:3002/api/products and the body. And when creating the POST request make sure to the header key value(key= Content-Type and value= application/json)

```json
{
  "product_id": 2,
  "name": "LAPTOP"
}
```

4.  Open a browser and enter the URL http://localhost:3002/api/products for sending a GET request to see the result.
5.  There is also another POST request for orders. You can explore the code and figure it out.
