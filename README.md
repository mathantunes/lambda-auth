# lambda-auth

Typescript lambda repo for authentication and token validation.

It is a sample project that validates JWT tokens using lambda authorizers

## Setup

```sh
npm test # runs jest test scripts
npm run prebuild # Create built folder
npm run copy-dependencies # Copy package.json and install prod dependencies
npm run compile # Compile with tsc to built folder
sam build # aws-sam bundle using the built folder
```
