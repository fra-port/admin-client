import axios from 'axios'

export const getAllReports = (date) => {
    return (dispatch) => {

        dispatch({
            type: 'GET_REPORTS_LOADING'
        })
        axios({
            method: "GET",
            url: `http://35.240.197.42/reports/day?date=${date}`
        })
            .then(res => {
                dispatch({
                    type: 'GET_REPORTS_SUCCESS',
                    payload: res.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_REPORTS_ERROR',
                })
                console.log(err);
            })
    }
}

export const getOneReport = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_REPORTS_LOADING'
        })
        axios({
            method: "GET",
            url: `http://35.240.197.42/reports/${id}`
        })
            .then(res => {
                dispatch({
                    type: 'GET_REPORTS_BYID',
                    payload: res.result
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_REPORTS_ERROR',
                })
            })
    }
}

export const getReportByUser = (userId) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_REPORTS_LOADING'
        })
        axios({
            method: "GET",
            url: `http://35.240.197.42/selling/user/${userId}`
        })
            .then(res => {
                dispatch({
                    type: 'GET_REPORTS_USER',
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_REPORTS_ERROR',
                })
            })
    }
}

