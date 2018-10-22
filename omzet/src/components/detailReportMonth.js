import React, { Component } from 'react'
import {ActivityIndicator, TouchableOpacity, ScrollView} from 'react-native'
import { View, Text, Card, CardItem, Body, Spinner} from 'native-base';
import { connect } from 'react-redux'
import getReportMonth from '../store/reports/reports.month.actoin'

class DetailReportMonth extends Component {
  constructor() {
    super()
    this.state = {
      month: ''
    }
  }

  componentDidMount = () => {
    let date = this.props.date
    
    let d = new Date(date._i)
    let newMonth = d.getMonth() + 1
    this.setState({
      month: newMonth
    })
    this.props.getMonthReport(newMonth)
  }

  componentDidUpdate = () => {


    let date = this.props.date
    
    let d = new Date(date._i)
    let newMonth = d.getMonth() + 1
    if (this.state.month !== newMonth) {
      this.setState({
        month: newMonth
      }, () => {
        this.props.getMonthReport(newMonth)
      })
    }
  }
  render() {
    return (
      <ScrollView>
      <View>
        {
          this.props.reportsMonthLoading ? <Spinner color="#58B9FE"/> :
          <Card>
                <CardItem header bordered>
                    <Text style={{color:"#F3962D"}}>Monthly Report </Text>
                    
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
                    <CardItem>
                        <Text style={{color:"#4152A9"}}>Detail..</Text>
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
