import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'native-base'
import MonthSelectorCalendar from 'react-native-month-selector'
import moment from 'moment'
import Octicons from 'react-native-vector-icons/Octicons'
import DetailMonth from '../components/detailReportMonth'
import DetailReportMonth from '../components/detailReportMonth';


export default class ReportMonth extends Component {
    constructor(props) {
        super()
        this.state = {
            month: moment(new Date(), 'MM YYYY'),
            status: false
        }
    }
    render() {
        return (
            <View>
                <View style={styles.rowStyle}>
                    <Octicons name='calendar' size={25} style={{ marginLeft: 10, marginTop: 4 }} />
                    <TouchableOpacity onPress={() => this.setState({ status: true })} style={{ marginTop: 10, marginLeft: 10 }}>
                        <Text> Select Month </Text>
                    </TouchableOpacity>
                </View>

                <Card>
                    {
                        this.state.status && <View style={{ padding: 30 }}>
                            <Text>
                                Selected Month is {this.state.month && this.state.month.format('MM YYYY')}
                            </Text>
                            <MonthSelectorCalendar
                                selectedDate={this.state.month}
                                monthTapped={(date) => this.setState({ month: date, status: false })}
                            />
                        </View>
                    }
                </Card>
                <Text>
                    Selected Month is {this.state.month.format('MM YYYY')}
                </Text>
                <DetailReportMonth date={this.state.month} navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        flex: 1,
        flexDirection: "row"
    }
});
