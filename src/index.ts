/* istanbul ignore file */

import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda'
import SimpleLogger from './utils/logging'
import { graphql } from 'graphql'
import schema from './graphql/schema'

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback, graphqlLib: any = graphql) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  const logger = new SimpleLogger(`${__filename} handler()`)
  logger.startTimer()
  logger.debug(`Received event: ${JSON.stringify(event)}`)

  const { query, variables } = JSON.parse(String(event.body))

  graphqlLib(schema, query, null, null, variables)
    .then((response) => {
      logger.debug(`Query succeeded: ${JSON.stringify(response)}`)
      logger.endTimer()
      callback(null, response)
    })
    .catch((error) => {
      logger.error(`Query failed: ${JSON.stringify(error)}`)
      logger.endTimer()
      callback(error)
    })

}
