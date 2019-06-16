import axios from "axios"

export const fetchFruits = () => {
  return dispatch => {
    dispatch(fetchFruitsLoading())

    axios
      .get(`/api/fruits.json`)
      .then(res => {
        dispatch(fetchFruitsSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchFruitsFailure(err.message))
      })
  }
}

export const fetchFruitsSuccess = fruits => ({
  type: "FETCH_FRUITS_SUCCESS",
  data: fruits
})

export const fetchFruitsLoading = () => ({
  type: "FETCH_FRUITS_LOADING"
})

export const fetchFruitsFailure = error => ({
  type: "FETCH_FRUITS_FAILURE",
  data: {
    error
  }
})
