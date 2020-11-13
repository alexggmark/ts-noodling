import React from 'react'
import {ApolloClientProvider} from './context'
import Comp1 from './components/Comp1'

const App = () => {
  return (
    <ApolloClientProvider>
      <Comp1 />
    </ApolloClientProvider>
  )
}

export default App