import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import headerCSS from "../styles/header.module.scss"
import cartIcon from "../images/svgs/cart.svg"

const Header = ({ cart }) => (
  <div className={headerCSS.block}>
    <h1>Apples -N- Oranges</h1>

    <Link to="/cart">
      <img src={cartIcon} alt="Shopping Cart Icon" />
      <p className={headerCSS.items}>Items: {cart.length}</p>
    </Link>
  </div>
)
const mapStateToProps = state => {
  return {
    fruits: state.items,
    cart: state.cart.items
  }
}

export default connect(mapStateToProps)(Header)
