import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../pages/app"
import CartPage from "../pages/cart"

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/cart" exact component={CartPage} />
    </Switch>
  </Router>
)
