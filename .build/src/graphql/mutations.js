"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_1 = require("./types");
const mutations = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        pingM: {
            type: types_1.PingResult,
            description: 'Very simple ping mutation for testing',
            args: {
                input: {
                    type: new graphql_1.GraphQLNonNull(types_1.PingTest),
                    description: 'Ping input'
                }
            },
            resolve: (root, args) => {
                return { result: true, message: args.input.message };
            }
        }
    })
});
exports.default = mutations;
//# sourceMappingURL=mutations.js.map