import React, { Component } from "react";
import { View, FlatList, StatusBar, StyleSheet, Fragment } from 'react-native'
import { List, ListItem, Thumbnail, Card, CardItem, Body, Text, Left, Right, Button } from "native-base";
import PieChart from 'react-native-pie-chart';

export default class ReportThumbnail extends Component {

    render() {
        const detail = this.props.detail.reports
        let date = this.props.detail.date
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
                            <Text>Date: {date}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body style={{ flexDirection: 'row', padding: 10 }}>
                            <Text>
                                Total income : {detail.totalIncome} {'\n'}
                                Total agent : {detail.totalReport} {'\n'}
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
                <View>
                    {
                        detail.result.length > 0 &&
                        <View>
                            <Card style={{ padding: 15 }}>
                                <View style={styles.rowStyle}>
                                    {
                                        newList.map((data, i) => {
                                            return (
                                                <View style={{ backgroundColor: data.color, paddingHorizontal: 5 }}>
                                                    <Text>{data.name}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={styles.container}>
                                    <Text style={styles.title}>Chart Report</Text>
                                    <PieChart
                                        chart_wh={chart_wh}
                                        series={serie}
                                        sliceColor={sliceColor}
                                    />
                                </View>
                            </Card>
                            <Card>
                                <List
                                    dataArray={detail.result}
                                    renderRow={(item) =>
                                        <ListItem thumbnail>
                                            <Left>
                                                <Thumbnail source={{ uri: item.sellingId.userId.propicURL }} />
                                            </Left>
                                            <Body>
                                                <Text style={{}}>{item.sellingId.userId.firstName} {item.sellingId.userId.lastName}</Text>
                                                <Text>List item sold:</Text>
                                                <FlatList
                                                    keyExtractor= {(item) => item._id}
                                                    data={item.sellingId.selling}
                                                    renderItem={
                                                        ({ item, index }) => (
                                                            <View>
                                                                <Text note numberOfLines={1}>{item.itemName} = {item.quantity} pcs = Rp {item.Total.toLocaleString()}</Text>
                                                            </View>
                                                        )
                                                    }
                                                />
                                            </Body>
                                        </ListItem>
                                    }>
                                </List>
                            </Card>
                        </View>

                    }
                </ View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10
    },

    columnStyle: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "red"
    },

    rowStyle: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: "row"
    }
});