import axios from 'axios'

export default  getReportMonth = (month) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_REPORTS_MONTH_LOADING'
        })
        axios({
            method: 'GET',
            url: `http://35.240.197.42/reports/month?month=${month}`
        })
        .then((result) => {
            dispatch({
                type: 'GET_REPORTS_MONTH_SUCCESS',
                payload: result
            })
        })
        .catch((err) => {
            dispatch({
                type: 'GET_REPORTS_MONTH_ERROR',
            })
        });
    }
}