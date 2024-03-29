import React from "react"
import Header from "./components/Header"

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

export default Layout
