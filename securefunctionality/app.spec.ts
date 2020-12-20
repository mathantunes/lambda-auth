// Import all functions from hello-from-lambda.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import * as lambda from './app';

describe('Test for Login API', function () {
    it('Verifies successful JWT token generation', async () => {
        const msg = "hello"
        const event: APIGatewayProxyEvent = {
            body: msg,
            headers: {},
            multiValueHeaders: {},
            httpMethod: "",
            isBase64Encoded: false,
            path: "",
            pathParameters: {},
            queryStringParameters: {},
            multiValueQueryStringParameters: {},
            stageVariables: {},
            requestContext: null,
            resource: ""
        }
        const result = await lambda.handler(event);
        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(msg.toUpperCase())
    }); 
});
