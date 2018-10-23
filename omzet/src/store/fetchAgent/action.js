import axios from 'axios'
const serverURL = "http://35.240.197.42"

export const getAllAgent = () => {
  return (dispatch) => {
    dispatch({ type: "GET_ALL_AGENT_REQUEST" })
    axios.get(`${serverURL}/users`)
      .then(({ data }) => {
        dispatch({ type: "GET_ALL_AGENT_SUCCESS", payload: data.data })
      })
      .catch((err) => {
        dispatch({ type: "GET_ALL_AGENT_FAILED", payload: err.message })
      })
  }
}