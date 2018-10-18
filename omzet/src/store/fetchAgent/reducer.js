const initState = {
    allAgent: [],
    oneAgent: {},
    isLoading: false,
    isError: false
  }
  
  const agentReducer = (state = initState, action) => {
    if (action.type === 'GET_AGENT_REQUEST') {
      return {
        ...state,
        allAgent: [],
        oneAgent: {},
        isLoading: true,
        isError: false
      }
    } else if (action.type === 'GET_ALL_AGENT_SUCCESS') {
        return {
          ...state,
          allAgent: action.payload,
          oneAgent: {},
          isLoading: false,
          isError: false
        }
    } else if (action.type === 'GET_AN_AGENT_SUCCESS') {
        return {
          ...state,
          allAgent: [],
          oneAgent: action.payload,
          isLoading: false,
          isError: false
        }
    } else if (action.type === 'GET_AGENT_ERROR') {
        return {
          ...state,
          allAgent: [],
          oneAgent: {},
          isLoading: false,
          isError: action.payload
        }
    } else {
        return state
    }
  }
  
  export default agentReducer