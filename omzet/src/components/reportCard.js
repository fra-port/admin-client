import React, { Component } from "react";
import { TouchableOpacity, FlatList, View } from 'react-native'
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
        getAll: () => dispatch(getAllReports())
    }
}

export class CardReport extends Component {
    componentDidMount = () => {

        this.props.getAll()
    }

    render() {
        const report = this.props.reports
        return (

            <Card>
                <CardItem header bordered>
                    <Text>{report.totalIncome}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingRight: 10 }}>
                            Total income : 50.000 {'\n'}
                            Total agen : 4 {'\n'}
                            Total Item Sold: 17 {'\n'}
                        </Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
                            Total income : 50.0000
                                         </Text>
                    </Body>
                </CardItem>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DailyReport', { detail: report })}>
                    <CardItem footer bordered>
                        <Text>Detail..</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>

            // <View>
            //     <FlatList
            //         data={this.props.reports.result}
            //         renderItem={
            //             ({ item, index }) => (
            //                 <Card>
            //                     <CardItem header bordered>
            //                         <Text>{item.totalIncome}</Text>
            //                     </CardItem>
            //                     <CardItem bordered>
            //                         <Body style={{ flexDirection: 'row' }}>
            //                             <Text style={{ paddingRight: 10 }}>
            //                                 Total income : 50.000 {'\n'}
            //                                 Total agen : 4 {'\n'}
            //                                 Total Item Sold: 17 {'\n'}
            //                             </Text>
            //                             <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
            //                                 Total income : 50.0000
            //                              </Text>
            //                         </Body>
            //                     </CardItem>
            //                     <TouchableOpacity onPress={() => this.props.navigation.navigate('DailyReport')}>
            //                         <CardItem footer bordered>
            //                             <Text>Detail..</Text>
            //                         </CardItem>
            //                     </TouchableOpacity>
            //                 </Card>
            //             )
            //         }
            //     />
            // </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardReport)