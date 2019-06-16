const fruitsDefault = {
  items: [],
  error: null,
  loading: true
}

const fruitsReducer = (state = fruitsDefault, action) => {
  switch (action.type) {
    case "FETCH_FRUITS_LOADING":
      return { ...state, loading: true }

    case "FETCH_FRUITS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        items: action.data
      }

    case "FETCH_FRUITS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.data.error
      }

    default:
      return state
  }
}

export default fruitsReducer
