import React from 'react'
import Comp1 from './components/Comp1'
import {ContextProvider} from './context'

const App = () => {
  return (
    <ContextProvider>
      <Comp1 />
    </ContextProvider>
  )
}

export default App