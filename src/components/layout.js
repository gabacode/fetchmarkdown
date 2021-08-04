import React, {Fragment} from "react"
import Header from './header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Lato", sans-serif;
  }
  a{
    color: #2455C3;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  .icon{
    color:#333;
    margin-right:5px;
  }
`

const Layout = ({children}) => {
  return (
    <Fragment>
      <GlobalStyle />
        <Header />
        <main className="container">
          {children}
        </main>
    </Fragment>
  )
}

export default Layout
