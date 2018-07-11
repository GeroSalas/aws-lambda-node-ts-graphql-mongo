/* istanbul ignore file */

import * as glob from 'glob'
import { GraphQLSchema } from 'graphql'
import queries from './queries'
import mutations from './mutations'

const graphqlTypeFiles = glob.sync('./types/!(queries.js|mutations.js)')

// iterate through everything in ./types
const graphqlTypes: any[] = []
for (let i = 0; i < graphqlTypeFiles.length; i++) {
  console.log(`--graphqlTypeFiles[${i}] = ${graphqlTypeFiles[i]}`)
  const module = require(graphqlTypeFiles[i])
  Object.keys(module).map((key) => {
    graphqlTypes.push(module[key])
  })
}

const schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
  types: graphqlTypes
})

export default schema
