import React from 'react'
import {ApolloClientProvider} from '../apollo'

const Comp1: React.FC = () => {
  return <ApolloClientProvider>Test</ApolloClientProvider>
}

export default Comp1