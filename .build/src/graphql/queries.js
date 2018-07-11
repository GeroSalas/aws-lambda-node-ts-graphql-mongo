"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const userService_1 = require("../services/userService");
const types_1 = require("./types");
const queries = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        pingQ: {
            type: types_1.PingResult,
            description: 'Very simple ping query for testing',
            resolve: (root, args) => {
                const service = new userService_1.UserService();
                return service.test();
            }
        }
    })
});
exports.default = queries;
//# sourceMappingURL=queries.js.map