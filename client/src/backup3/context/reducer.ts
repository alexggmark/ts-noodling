import {
  INCREMENT,
  DECREMENT
} from './constants'

interface CounterInterfaceObject {
  count: number
}

export interface CounterInterface {
  state: CounterInterfaceObject
  dispatch: React.Dispatch<ReducerAction>
}

interface ReducerAction {
  type: string
}

export const initialState = {
  count: 0
}

export const reducer = (state: CounterInterfaceObject, action: ReducerAction) => {
  switch(action.type) {
    case INCREMENT:
      console.log('INCREMENT')
      return {count: state.count + 1}
    case DECREMENT:
      console.log('DECREMENT')
      return {count: state.count - 1}
    default:
      throw new Error('No action matches')
  }
}