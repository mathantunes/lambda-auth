# lambda-auth

Typescript lambda repo for authentication and token validation.

It is a sample project that validates JWT tokens using lambda authorizers.

It contains a **Login** endpoint that generates JWT tokens to allow for **Upper** functionality to be accessed by validating all incoming messages agains a Lambda authorizer

## Setup

```sh
npm test # runs jest test scripts
npm run prebuild # Create built folder
npm run copy-dependencies # Copy package.json and install prod dependencies
npm run compile # Compile with tsc to built folder
sam build # aws-sam bundle using the built folder
# sam package
# sam deploy
```
