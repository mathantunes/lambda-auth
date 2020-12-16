import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

/**
 * A Lambda function that returns a static string
 */
export const helloFromLambdaHandler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    // If you change this message, you will need to change hello-from-lambda.test.js
    const message = 'Hello from Lambda!';
    console.log(event);
    // All log statements are written to CloudWatch
    console.info(`${message}`);

    return {
        statusCode: 200, 
        body: message
    };
}
