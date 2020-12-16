// Import all functions from hello-from-lambda.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import * as lambda from './hello-from-lambda';

// This includes all tests for helloFromLambdaHandler()
describe('Test for hello-from-lambda', function () {
    // This test invokes helloFromLambdaHandler() and compare the result 
    it('Verifies successful response', async () => {
        // Invoke helloFromLambdaHandler()
        const event: APIGatewayProxyEvent = {
            body: "Hello",
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
        const result = await lambda.helloFromLambdaHandler(event);
        const expectedResult = 'Hello from Lambda!';
        // Compare the result with the expected result
        expect(result.body).toEqual(expectedResult);
    }); 
});
