"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const graphql_1 = require("graphql");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const graphqlTypeFiles = glob.sync('./types/!(queries.js|mutations.js)');
// iterate through everything in ./types
const graphqlTypes = [];
for (let i = 0; i < graphqlTypeFiles.length; i++) {
    console.log(`--graphqlTypeFiles[${i}] = ${graphqlTypeFiles[i]}`);
    const module = require(graphqlTypeFiles[i]);
    Object.keys(module).map((key) => {
        graphqlTypes.push(module[key]);
    });
}
const schema = new graphql_1.GraphQLSchema({
    query: queries_1.default,
    mutation: mutations_1.default,
    types: graphqlTypes
});
exports.default = schema;
//# sourceMappingURL=schema.js.map