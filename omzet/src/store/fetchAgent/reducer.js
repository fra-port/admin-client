const initState = {
  allAgent: [],
  isLoading: false,
  isError: false
}

const agentReducer = (state = initState, action) => {
  if (action.type === 'GET_ALL_AGENT_REQUEST') {
    return {
      ...state,
      allAgent: [],
      isLoading: true,
      isError: false
    }
  } else if (action.type === 'GET_ALL_AGENT_SUCCESS') {
      return {
        ...state,
        allAgent: action.payload,
        isLoading: false,
        isError: false
      }
  } else if (action.type === 'GET_ALL_AGENT_ERROR') {
      return {
        ...state,
        allAgent: [],
        isLoading: false,
        isError: action.payload
      }
  } else {
      return state
  }
}

export default agentReducer
