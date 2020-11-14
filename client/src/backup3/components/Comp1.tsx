import React from 'react'
import {ReducerContext} from '../context'
import {
  INCREMENT,
  DECREMENT
} from '../context'

const Comp1 = () => {
  const context = React.useContext(ReducerContext)
  return <>
    <h1>{context.state.count}</h1>
    <button onClick={() => context.dispatch({ type: INCREMENT})}>Increase</button>
    <button onClick={() => context.dispatch({ type: DECREMENT})}>Decrease</button>
  </>
}

export default Comp1