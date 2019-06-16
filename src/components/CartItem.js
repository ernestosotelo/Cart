import React from "react"
import itemCSS from "../styles/item.module.scss"

const CartItem = props => {
  return (
    <div className={itemCSS.block}>
      <img
        className={itemCSS.photo}
        src={props.photo}
        alt={`Poster of: ${props.alt}`}
      />
      <p className={itemCSS.name}>{props.name}</p>
      <div className={itemCSS.quantity}>
        <label htmlFor="cartQuantity">qty:</label>{" "}
        <input
          defaultValue={props.value}
          min="1"
          id="cartQuantity"
          name="cartQuantity"
          type="number"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      </div>
      <button className={itemCSS.removeButton} onClick={props.handleRemove}>
        Remove
      </button>

      <p className={itemCSS.price}>Price: ${props.price}</p>
    </div>
  )
}

export default CartItem
