import React, { Component } from 'react'
import {ActivityIndicator, TouchableOpacity, ScrollView} from 'react-native'
import { View, Text, Card, CardItem, Body} from 'native-base';
import { connect } from 'react-redux'
import getReportMonth from '../store/reports/reports.month.actoin'

class DetailReportMonth extends Component {
  componentDidMount = () => {
    let date = this.props.date
    let d = new Date(date._i)
    let month = d.getMonth() + 1
    this.props.getMonthReport(month)
  }
  render() {
    return (
      <ScrollView>
      <View>
        <Text>detail DetailReportMonth </Text>
        {
          this.props.reportsMonthLoading ? <ActivityIndicator size="large" color="#0000ff" /> :
          <Card>
                <CardItem header bordered>
                    <Text>Daily Report</Text>
                </CardItem>
                <CardItem bordered>
                    <Body style={{ flexDirection: 'row' }}>
                          {
                            this.props.reportsMonth.data &&  <Text style={{ paddingRight: 10 }}>  
                            Total income : {this.props.reportsMonth.data.obj.incomeMonth} {'\n'}
                            Total agen : {this.props.reportsMonth.data.obj.users.listUsers.length} {'\n'}</Text>
                          }
                    </Body>
                </CardItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MonthlyReport', {detail: this.props.reportsMonth})}>
                    <CardItem footer bordered>
                        <Text>Detail..</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        }
        
      </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.reportMonthReducer.isLoading) {
    return {
      reportsMonthLoading: true
    }
  } else {
    return {
      reportsMonth: state.reportMonthReducer.reports,
      reportsMonthLoading: false
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    getMonthReport: (month) => dispatch(getReportMonth(month))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailReportMonth)
