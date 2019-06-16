const cartDefault = {
  items: []
}

const cartReducer = (state = cartDefault, action) => {
  switch (action.type) {
    case "ADD_SELECTION":
      return {
        ...state,
        items: [...state.items, action.selection]
      }

    case "REMOVE_SELECTION":
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.id)
      }

    default:
      return state
  }
}

export default cartReducer
