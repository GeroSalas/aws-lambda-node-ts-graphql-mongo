"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("./utils/logging");
const graphql_1 = require("graphql");
const schema_1 = require("./graphql/schema");
function handler(event, context, callback, graphqlLib = graphql_1.graphql) {
    context.callbackWaitsForEmptyEventLoop = false;
    const logger = new logging_1.default(`${__filename} handler()`);
    logger.startTimer();
    logger.debug(`Received event: ${JSON.stringify(event)}`);
    const { query, variables } = JSON.parse(event.body);
    graphqlLib(schema_1.default, query, null, null, variables)
        .then((response) => {
        logger.debug(`Query succeeded: ${JSON.stringify(response)}`);
        logger.endTimer();
        callback(null, response);
    })
        .catch((error) => {
        logger.error(`Query failed: ${JSON.stringify(error)}`);
        logger.endTimer();
        callback(error);
    });
}
exports.handler = handler;
//# sourceMappingURL=index.js.map