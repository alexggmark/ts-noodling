import React from 'react'
import {reducer, initialState, CounterInterface} from './reducer'

interface IProps {
  children: React.ReactNode
}

export const ReducerContext = React.createContext<CounterInterface>({
  state: initialState,
  dispatch: () => null
})

export const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <ReducerContext.Provider value={{state, dispatch}}>
      {children}
    </ReducerContext.Provider>
  )
}
