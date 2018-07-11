/* istanbul ignore file */

import SimpleLogger from './utils/logging'
import { graphql } from 'graphql'
import schema from './graphql/schema'

export function handler(event: any, context: any, callback: any, graphqlLib: any = graphql) {
  context.callbackWaitsForEmptyEventLoop = false
  
  const logger = new SimpleLogger(`${__filename} handler()`)
  logger.startTimer()
  logger.debug(`Received event: ${JSON.stringify(event)}`)

  const { query, variables } = JSON.parse(event.body)

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
