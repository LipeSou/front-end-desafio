import React from 'react'
import Router from './routes/Router';
import GlobalState from './global/GlobalState'
import { GlobalStyle } from './global/GlobalStyle';


const App= () => {


  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </ GlobalState>
    </div>
  )
}

export default App;
