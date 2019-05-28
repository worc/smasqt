import React from 'react'
import { render } from 'react-dom'
// import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Smasqt from './Smasqt'

const GlobalStyle = createGlobalStyle`
    #app {
        font-family: "Rokkitt", serif;
        font-size: 16px;
    }
    
    h1 {
        font-size: 40px;
    }
    
    h2 {
        font-size: 32px;
    }
`
render(
  <React.Fragment>
    <GlobalStyle/>
    <Smasqt/>
  </React.Fragment>
  , document.getElementById('app')
)
