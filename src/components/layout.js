import React, {Fragment} from "react"
import Header from './header'

const Layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
