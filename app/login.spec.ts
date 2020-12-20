// Import all functions from hello-from-lambda.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import { LoginRequest } from '../domain/loginrequest';
import * as lambda from './login';

describe('Test for hello-from-lambda', function () {
    it('Verifies successful response', async () => {
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
        const result = await lambda.login(event);
        expect(result.statusCode).toEqual(200);
        expect(result.headers.token).toBeDefined()
    }); 
});
