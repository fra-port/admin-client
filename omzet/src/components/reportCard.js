import React, { Component } from "react";
import { TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Body } from "native-base";
import { connect } from 'react-redux'
import { getAllReports } from '../store/reports/reports.action'

const mapStateToProps = (state) => {
    return {
        reports: state.reportsReducer.reports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (date) => dispatch(getAllReports(date))
    }
}

export class CardReport extends Component {
    componentDidMount = () => {
        this.props.getAll(this.props.date)
    }

    componentDidUpdate = (prevProps, prevState) => {
        // this.props.getAll(this.props.date)
    }

    render() {
        const report = this.props
        return (
            <Card>
                <CardItem header bordered>
                    <Text>Daily Report</Text>
                </CardItem>
                <CardItem bordered>
                    <Body style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingRight: 10 }}>
                            Total income : {report.reports.totalIncome} {'\n'}
                            Total agen : {report.reports.totalReport} {'\n'}
                        </Text>
                    </Body>
                </CardItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DailyReport', { detail: report })}>
                    <CardItem footer bordered>
                        <Text>Detail..</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardReport)