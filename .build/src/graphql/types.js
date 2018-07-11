"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// Output types
const PingResult = new graphql_1.GraphQLObjectType({
    name: 'PingResult',
    description: 'Simple test ping result',
    fields: () => ({
        result: {
            type: graphql_1.GraphQLBoolean,
            description: 'Boolean Result'
        },
        message: {
            type: graphql_1.GraphQLString,
            description: 'String result message'
        }
    })
});
exports.PingResult = PingResult;
// Input types
const PingTest = new graphql_1.GraphQLInputObjectType({
    name: 'PingTest',
    description: 'Simple test ping input',
    fields: {
        message: {
            type: graphql_1.GraphQLString,
            description: 'String ping message to be returned'
        }
    }
});
exports.PingTest = PingTest;
//# sourceMappingURL=types.js.map