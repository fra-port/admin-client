import axios from 'axios'

export const getAllReports = () => {
    return (dispatch) => {
        let today = new Date()


        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let day = today.getDay()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let yyyy = today.getFullYear()

        let HH = today.getHours()
        let MM = today.getMinutes()

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        if (MM < 10) {
            MM = '0' + MM
        }

        today = yyyy + '-' + mm + '-' + dd

        dispatch({
            type: 'GET_REPORTS_LOADING'
        })
        axios({
            method: "GET",
            url: `http://35.240.197.42/reports/day?date=${today}`
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

