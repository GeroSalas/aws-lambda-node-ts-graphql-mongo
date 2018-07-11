/* istanbul ignore file */

import { GraphQLObjectType } from 'graphql'
import { UserService } from '../services/userService'
import { PingResult } from './types'

const queries = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    pingQ: {
      type: PingResult,
      description: 'Very simple ping query for testing',
      resolve: (root, args) => {
        const service = new UserService()
        return service.test()
      }
    }
  })
})

export default queries
