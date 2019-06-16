import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Item from "../components/Item"
import { fetchFruits } from "../actions/fruits"
import { addSelection } from "../actions/cart"
import itemsCSS from "../styles/items.module.scss"

const Items = ({ fetchFruits, fruits, cart, addSelection }) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (fruits.length === 0) {
      return fetchFruits()
    }
  }, [fetchFruits, fruits.length])

  return (
    <div className={itemsCSS.block}>
      {fruits.map(fruit => {
        const match = cart.find(item => item.id === fruit.id)

        return (
          <Item
            buttonDisplay={match ? "none" : "block"}
            messageDisplay={match ? "block" : "none"}
            id={fruit.id}
            value={quantity}
            handleChange={event => {
              setQuantity(event.target.value)
            }}
            handleAddToCart={() => {
              if (!match) {
                addSelection({
                  id: fruit.id,
                  name: fruit.name,
                  photo: fruit.photo,
                  price: fruit.price,
                  quantity: document
                    .getElementById(fruit.id)
                    .getAttribute("value")
                })
              }
            }}
            key={fruit.id}
            {...fruit}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    fruits: state.fruits.items,
    cart: state.cart.items
  }
}

const mapDispatchToProps = {
  fetchFruits,
  addSelection
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
