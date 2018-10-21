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

    let newMonth = ''
    if (typeof date._i == 'string') {
      newMonth = d.getDate() 
    } else {
      newMonth = d.getMonth() + 1
    }
  
    
    if (this.state.month !== newMonth) {
      this.setState({
        month: newMonth
      })
      this.props.getMonthReport(newMonth)
    }
  }
  render() {
    return (
      <ScrollView>
      <View>
        {
          this.props.reportsMonthLoading ? <Spinner size="large" color="#58B9FE" style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30}}/> :
          <Card>
                <CardItem header bordered>
                    <Text>Monthly Report </Text>
                    
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
