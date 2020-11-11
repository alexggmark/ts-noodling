import React, {useContext, useState} from 'react'
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
  const availableModes = ['light', 'dark']
  const theme = useContext(MyContext)
  const [mode, setMode] = useState('light')

  const handleThemeSwitch = () => {
    theme.dispatch({ type: mode })
    if (mode === availableModes[0]) {
      setMode(availableModes[1])
      return
    }
    setMode(availableModes[0])
  }
  return (
    <div className="App">
      <Container>Test</Container>
      <Button onClick={() => handleThemeSwitch()}>Click</Button>
    </div>
  );
}

export default App;
