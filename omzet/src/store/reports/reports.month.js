const initialState = {
    isLoading: false,
    isError: false,
    reports: [],
}

const reportMonthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_REPORTS_MONTH_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_REPORTS_MONTH_SUCCESS':
            return {
                ...state,
                reports: action.payload,
                isLoading: false
            }
        case 'GET_REPORTS_MONTH_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        default:
            return state
    }
}

export default reportMonthReducer