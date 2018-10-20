import React, { Component } from "react";
import { TouchableOpacity, FlatList, View } from 'react-native'
import { Card, CardItem, Text, Body, List, ListItem, Left, Thumbnail, Item } from "native-base";
import { getReportByUser } from '../store/reports/reports.action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        userReports: state.reportsReducer.reportsUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserReports: (userId) => dispatch(getReportByUser(userId))
    }
}


export class reportCardUser extends Component {

    componentDidMount = () => {
        this.props.getUserReports(this.props.userId)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.userReports}
                    keyExtractor= {(item) => item._id}
                    renderItem={
                        ({ item, index }) => (
                            <Card>
                                <CardItem header bordered>
                                    <Text>Agent {item.userId.firstName} {item.userId.lastName} report {'\n'}Date: {item.createdAt.toString().substr(0, 10)}</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body style={{ flexDirection: 'row' }}>
                                        <Thumbnail square source={require('../assets/omzet-logo.png')} />
                                        <View style={{ flexDirection: 'column', marginLeft:20 }}>
                                            <Text>List item sold:</Text>
                                            <FlatList
                                                data={item.selling}
                                                renderItem={
                                                    ({ item, index }) => (
                                                        <View>
                                                            <Text>{item.itemName} = {item.quantity} pcs = Rp { item.Total.toLocaleString()}</Text>
                                                        </View>
                                                    )
                                                }
                                                keyExtractor= {(item) => item._id}
                                            />
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        )
                    }
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reportCardUser)