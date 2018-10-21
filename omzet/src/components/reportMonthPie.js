import React, { Component } from 'react'
import {FlatList} from 'react-native'
import { View, Card, Text, Body, CardItem } from 'native-base';


export default class ReportMonthPie extends Component {
    render() {
        const detail = this.props.navigation.state.params.detail.data.obj
        console.log(detail);
        
        const serie = []
        const newList = detail.listItem
        detail.listItem.forEach(item => {
            serie.push(item.totalSelling)
        });
        const sliceColor = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#9400D3', '#00FFFF', '#9400D3']

        newList.forEach((item, index) => {
            item.color = sliceColor[index]
        });

        const chart_wh = 250
        return (
            <View>
                <Card>
                    <CardItem header bordered>
                        <Body>
                            <Text style={{ fontSize: 40 }}>Result </Text>
                            {/* <Text>Date: {date}</Text> */}
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body style={{ flexDirection: 'row', padding: 10 }}>
                            <Text>
                                Total income : {detail.incomeMonth} {'\n'}
                                Total agen : {detail.users.listUsers.length} {'\n'}
                            </Text>
                            <Body>
                                <Text>Total Item sold: {'\n'}</Text>
                                <FlatList
                                    data={detail.listItem}
                                    keyExtractor={(item) => item._id}
                                    renderItem={
                                        ({ item, index }) => (
                                            <Text style={{ justifyContent: 'flex-end' }}>
                                                {item.name}  = {item.totalSelling} pcs
                                            </Text>
                                        )
                                    }
                                />
                            </Body>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}
