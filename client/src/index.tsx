import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './components/Comp1';
import {Providers} from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Comp1 />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
