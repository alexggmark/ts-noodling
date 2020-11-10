import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: ${(props: any) => props.theme.color};
  background-color: ${(props: any) => props.theme.bg};
`

const Button = styled.button`
  background-color: red;
  color: white;
`

const App = () => { 
  return (
    <div className="App">
      <Container>Test</Container>
      <Button>Click</Button>
    </div>
  );
}

export default App;
