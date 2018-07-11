/* istanbul ignore file */

import { GraphQLString, GraphQLBoolean, GraphQLInputObjectType, GraphQLObjectType } from 'graphql'

  // Output types
  const PingResult = new GraphQLObjectType({
    name: 'PingResult',
    description: 'Simple test ping result',
    fields: () => ({
      result: {
        type: GraphQLBoolean,
        description: 'Boolean Result'
      },
      message: {
        type: GraphQLString,
        description: 'String result message'
      }
    })
  })

  // Input types
  const PingTest = new GraphQLInputObjectType({
    name: 'PingTest',
    description: 'Simple test ping input',
    fields: {
      message: {
        type: GraphQLString,
        description: 'String ping message to be returned'
      }
    }
  })

  export {
    PingResult,
    PingTest
  }
