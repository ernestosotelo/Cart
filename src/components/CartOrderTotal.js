import React from "react"
import { Link } from "react-router-dom"
import cartOrderCSS from "../styles/cartOrderTotal.module.scss"

const CartOrderTotal = props => {
  return (
    <div className={cartOrderCSS.block}>
      <h2>Order Summary</h2>
      <div className={cartOrderCSS.items}>
        <b style={{ fontSize: "3rem" }}>Items</b>
        {props.itemList}
      </div>

      <div className={cartOrderCSS.taxAmounts}>
        <p>Total before tax: ${props.total}</p>
        <p>Estimated tax: ${props.tax}</p>
      </div>

      <p className={cartOrderCSS.purchaseTotal}>
        Order Total: ${props.purchaseTotal}{" "}
      </p>
      <button className={cartOrderCSS.purchaseButton}>Purchase</button>
      <Link to="/">
        <button className={cartOrderCSS.link}> Continue Shopping</button>
      </Link>
    </div>
  )
}

export default CartOrderTotal
