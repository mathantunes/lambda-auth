// Import all functions from hello-from-lambda.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import { LoginRequest } from '../domain/loginrequest';
import * as lambda from './app';

describe('Test for Login API', function () {
    it('Verifies successful JWT token generation', async () => {
        const loginRequest: LoginRequest = {
            username: "User",
            password: "Password"
        }
        const event: APIGatewayProxyEvent = {
            body: JSON.stringify(loginRequest),
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
        expect(result.headers.token).toBeDefined()
    }); 
});
