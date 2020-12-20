import {
    APIGatewayAuthorizerResult,
    APIGatewayRequestAuthorizerEvent
} from "aws-lambda";
import * as jwt from "jsonwebtoken";
import { TokenMetadata } from "../domain/tokenmetadata";

const secret: string = process.env.JWTSecret || "secret"

export const handler = async (event: APIGatewayRequestAuthorizerEvent) : Promise<APIGatewayAuthorizerResult> => {
    try {
        const token: string = event.headers?.token ?? ""
        const decoded = jwt.verify(token, secret, { algorithms: [ "HS256" ]})
        const tokenmetadata = decoded as TokenMetadata
        return AWSResponse(tokenmetadata?.User ?? "", "Allow", tokenmetadata)
    } catch(err){
        return AWSResponse("", "Deny", {})
    }
}

type Effect = "Allow" | "Deny"
const AWSResponse = (id: string, effect: Effect, context: any ): APIGatewayAuthorizerResult => ({
    principalId: id,
    policyDocument: {
        Version: "2012-10-17",
        Statement: [
            {
                Action: "*",
                Effect: effect,
                Resource: "*"
            }
        ]
    },
    context: {
        ...context,
    }
})
