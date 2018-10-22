import React, { Component } from "react";
import { TouchableOpacity, View } from 'react-native'
import { Card, CardItem, Text, Body, Spinner } from "native-base";
import { connect } from 'react-redux'
import { getAllReports } from '../store/reports/reports.action'

const mapStateToProps = (state) => {
    return {
        reports: state.reportsReducer.reports,
        isLoading : state.reportsReducer.isLoading
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
        this.setState({

        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.date !== prevProps.date || this.props.isRefresh !== prevProps.isRefresh) {
            this.props.getAll(this.props.date)
        }
    }

    render() {
        const report = this.props
        return (
            <View>
                {report.isLoading ? <Spinner color="#58B9FE"/> :
                <Card>
                    <CardItem header bordered>
                        <Text style={{color:"#F3962D"}}>Daily Report</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingRight: 10 }}>
                                Total income : {report.reports.totalIncome} {'\n'}
                                Total agent : {report.reports.totalReport} {'\n'}
                            </Text>
                        </Body>
                    </CardItem>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DailyReport', { detail: report })}>
                        <CardItem>
                            <Text style={{color:"#4152A9"}}>Detail..</Text>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            }
            </View>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardReport)