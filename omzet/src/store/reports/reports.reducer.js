const initialState = {
    isLoading: false,
    isError: false,
    reports: [],
    report: {},
    reportsUser:[],
}

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_REPORTS_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_REPORTS_SUCCESS':
            return {
                ...state,
                reports: action.payload,
                isLoading: false
            }
        case 'GET_REPORTS_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        case 'GET_REPORTS_BYID':
            return {
                ...state,
                report: action.payload,
                isLoading: false
            }
        case 'GET_REPORTS_USER':
            return {
                ...state,
                reportsUser: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default reportsReducer