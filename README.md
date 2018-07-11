# Sample - API

This repository has the major components of the API (core microservice). This repo provides API support for the XXX platform.

## Serverless AWS
This code is hosted using [AWS Lambdas](https://aws.amazon.com/lambda/) and deployed using [AWS CodePipeline](https://aws.amazon.com/codepipeline) with [Serverless Framework](https://serverless.com/framework/docs/providers/aws/).

### Installation
- Install [Node.js](http://nodejs.org/download/) if it's not already on your local machine (make sure to use v6.10.1)
- Run `npm install` to install required modules/packages

### Running Locally
#### CLI
```
$ npm run sls:dev
```
#### VS Code debugger
Go to Debugger > Choose task: 'Serverless offline lambda debugger'

Then open [PotsmanApp](https://www.getpostman.com/) and send requests (test events directory: `/lambda_local/test`) to your server running on http://localhost:3000/

### Testing
Run UnitTests:
```
$ npm run test
```

### Technology
- [TypeScript](https://www.typescriptlang.org/) - [Github](https://github.com/Microsoft/TypeScript)
- [GraphQL](http://graphql.org/) - [Github](https://github.com/graphql)
- [AWS Lambda Functions](https://aws.amazon.com/lambda/)
- [MongoDB](https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas) using [mongoose](http://mongoosejs.com/docs/lambda.html)
- [Winston Logger](https://github.com/winstonjs/winston)
