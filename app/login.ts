import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import * as jwt from "jsonwebtoken";
import { LoginRequest } from "../domain/loginrequest";


const secret: string = process.env.JWTSecret || "secret"

export const login = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    const req: LoginRequest = JSON.parse(event.body);
    // * Definitely authorized
    const token: string = jwt.sign({ User: req.username }, secret, { algorithm: "HS256", expiresIn: '1h' })
    return {
        statusCode: 200, 
        headers: {
            token: token
        },
        body: "",
    };
}
