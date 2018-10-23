import axios from 'axios'

const getProduct = () => {
  return dispatch => {
    axios.get('http://35.240.197.42/items')
      .then(response => {
        dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: response.data.result })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default getProduct