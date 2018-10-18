const initState = {
  products: [],
  isLoaded: false
}

const productReducers = (state = initState, action) => {
  if (action.type === 'FETCH_PRODUCT_SUCCESS') {
    return {
      ...state,
      products: action.payload,
      isLoaded: true
    }
  } else {
    return state
  }
}

export default productReducers