import React, { useState } from "react"
import cartIcon from "../images/svgs/cart.svg"
import itemCSS from "../styles/item.module.scss"

const Item = props => {
  const [quantity, setQuantity] = useState(1)

  const handleChange = e => {
    setQuantity(e.target.value)
  }

  const handleOnBlur = e => {
    if (e.target.value < 1) {
      setQuantity(1)
    }
  }

  return (
    <div className={itemCSS.block}>
      <img className={itemCSS.photo} src={props.photo} alt={` ${props.alt}`} />
      <p className={itemCSS.name}>{props.name}</p>
      <div className={itemCSS.quantity}>
        <label htmlFor="quantity"> qty: </label>
        <input
          min="1"
          id={props.id}
          type="number"
          className="quantity"
          onChange={handleChange}
          onBlur={handleOnBlur}
          value={quantity}
        />
      </div>
      <p className={itemCSS.message} style={{ display: props.messageDisplay }}>
        Added to your cart.
      </p>
      <button
        style={{ display: props.buttonDisplay }}
        onClick={props.handleAddToCart}
      >
        <img
          className={itemCSS.cartIcon}
          src={cartIcon}
          alt="Shopping Cart Icon"
        />
        Add to Cart
      </button>

      <p className={itemCSS.price}>Price: ${props.price}</p>
    </div>
  )
}

export default Item
