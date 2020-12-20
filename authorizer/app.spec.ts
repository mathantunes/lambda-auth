// Import all functions from hello-from-lambda.js
import { APIGatewayRequestAuthorizerEvent } from 'aws-lambda';
import * as lambda from './app';

describe('Test for Lambda Request Authorizer', function () {
    it('Verifies success deny of invalid JWT token', async () => {
        const event: APIGatewayRequestAuthorizerEvent = {
            headers: {
                token: "thisisnotavalidtoken"
            },
            httpMethod: "",
            methodArn: "",
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            path: "",
            pathParameters: {},
            queryStringParameters: {},
            requestContext: null,
            resource: null,
            stageVariables: null,
            type: null,
        }
        const result = await lambda.handler(event);
        expect(result.principalId).toEqual("");
        expect(result.policyDocument.Statement[0].Effect).toBeDefined()
        expect(result.policyDocument.Statement[0].Effect).toEqual("Deny")
    }); 
    it('Verifies successful verification of a valid JWT token', async () => {
        const event: APIGatewayRequestAuthorizerEvent = {
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoiVXNlciIsImlhdCI6MTYwODQyNjg5NSwiZXhwIjoxNjA4NDMwNDk1fQ.t8ZTk0S-bGDc4WpVeOLbKzCqUl9u1ixpr2WzdQpJW-U"
            },
            httpMethod: "",
            methodArn: "",
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            path: "",
            pathParameters: {},
            queryStringParameters: {},
            requestContext: null,
            resource: null,
            stageVariables: null,
            type: null,
        }
        const result = await lambda.handler(event);
        expect(result.principalId).toEqual("User");
        expect(result.policyDocument.Statement[0].Effect).toBeDefined()
        expect(result.policyDocument.Statement[0].Effect).toEqual("Allow")
    }); 
});
