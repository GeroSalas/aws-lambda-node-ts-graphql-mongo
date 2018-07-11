/* istanbul ignore file */

import { GraphQLObjectType, GraphQLNonNull } from 'graphql'
import { PingResult, PingTest } from './types'

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    pingM: {
      type: PingResult,
      description: 'Very simple ping mutation for testing',
      args: {
        input: {
          type: new GraphQLNonNull(PingTest),
          description: 'Ping input'
        }
      },
      resolve: (root, args) => {
        return { result: true, message: args.input.message }
      }
    }
  })
})

export default mutations
