import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { removeSelection } from "../actions/cart"
import CartItem from "../components/CartItem"
import cartPageCSS from "../styles/cartPage.module.scss"
import CartOrderTotal from "../components/CartOrderTotal"
import Layout from "../Layout"

const CartPage = ({ cart, removeSelection }) => {
  const [discount, setDiscount] = useState(false)
  const [total, setTotal] = useState("")

  const handleTotal = () => {
    const amount = cart.map(item => {
      return parseFloat(item.price) * Number(item.quantity)
    })

    const sumAmount = amount.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    setTotal(parseFloat(sumAmount).toFixed(2))
  }

  useEffect(() => {
    handleTotal()
  })

  const handleBlur = e => {
    if (e.target.value < 1) {
      return (e.target.value = 1)
    }
  }

  const itemQuantities = discountItem => {
    const orange = discountItem.find(item => item === "frorange123")
    const apple = discountItem.find(item => item === "frapple123")

    const quantities = cart.map(item => {
      if (item.id === apple) {
        return (
          <p key={item.id} style={{ fontSize: "2rem" }}>
            {item.name} qty: {Number(item.quantity) * 2}{" "}
          </p>
        )
      }

      if (item.id === orange) {
        const formula = () => {
          let totalQuantity
          let remainder

          if (Number(item.quantity) === 1) {
            totalQuantity = Number(item.quantity)
          } else if (
            Number(item.quantity) % 2 === 0 &&
            Number(item.quantity) >= 2
          ) {
            totalQuantity = Number(item.quantity) * 1.5
          } else {
            totalQuantity = Number(item.quantity) * 1.5 - 0.5
          }

          return (
            <p key={item.id} style={{ fontSize: "2rem" }}>
              {item.name} qty: {Number(totalQuantity)}{" "}
            </p>
          )
        }
        return formula()
      } else {
        return (
          <p key={item.id} style={{ fontSize: "2rem" }}>
            {item.name} qty: {Number(item.quantity)}{" "}
          </p>
        )
      }
    })

    return quantities
  }

  return (
    <Layout>
      <div className={cartPageCSS.block}>
        {cart.length > 0 && (
          <div className={cartPageCSS.testing}>
            {" "}
            <h2>Testing Purposes:</h2>
            <button onClick={() => setDiscount(!discount)}>
              {discount === false ? "Apply Discounts" : "Remove Discounts"}
            </button>
          </div>
        )}

        {cart.map(item => {
          return (
            <div key={item.id} className={cartPageCSS.items}>
              <CartItem
                key={item.id}
                handleChange={e => {
                  item.quantity = e.target.value
                  console.log(cart)
                  handleTotal()
                  return e.target.value
                }}
                handleBlur={handleBlur}
                value={item.quantity}
                handleRemove={() => removeSelection({ id: item.id })}
                {...item}
              />
            </div>
          )
        })}

        {cart.length === 0 ? (
          <div>
            <p className={cartPageCSS.message}>Your cart is empty!</p>
            <Link to="/">
              <button className={cartPageCSS.link}> Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <CartOrderTotal
            itemList={
              discount
                ? itemQuantities(["frapple123", "frorange123"])
                : itemQuantities([])
            }
            total={total}
            purchaseTotal={(total * 1.05).toFixed(2)}
            tax={(total * 0.05).toFixed(2)}
          />
        )}
        {}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    fruits: state.items,
    cart: state.cart.items
  }
}

const mapDispatchToProps = {
  removeSelection
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)
