import React, {useContext} from 'react'
import styled from 'styled-components'
import {MyContext} from './context/context'

const Container = styled.div`
  color: ${(props: any) => props.theme.color};
  background-color: ${(props: any) => props.theme.bg};
`

const Button = styled.button`
  background-color: red;
  color: white;
`

const App: React.FC = () => {
  const theme = useContext(MyContext)
  return (
    <div className="App">
      <Container>Test</Container>
      <Button onClick={() => theme.dispatch({ type: 'dark' })}>Click</Button>
    </div>
  );
}

export default App;
