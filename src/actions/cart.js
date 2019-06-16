export const addSelection = ({ id, name, price, photo, quantity }) => ({
  type: "ADD_SELECTION",
  selection: {
    id,
    name,
    price,
    photo,
    quantity
  }
})

export const removeSelection = ({ id }) => ({
  type: "REMOVE_SELECTION",
  id
})
