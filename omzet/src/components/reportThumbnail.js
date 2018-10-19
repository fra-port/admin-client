import React, { Component } from "react";
import { View, FlatList, StatusBar, StyleSheet } from 'react-native'
import { List, ListItem, Thumbnail, Card, CardItem, Body, Text, Left, Right, Button } from "native-base";
import PieChart from 'react-native-pie-chart';

export default class ReportThumbnail extends Component {

    render() {
        const detail = this.props.detail
        const chart_wh = 250
        const series = [123, 321, 123, 789, 537]
        const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
        return (
            <View>
                <Card>
                    <CardItem header bordered>
                        <Body>
                            <Text style={{ fontSize: 50 }}>Result </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body style={{ flexDirection: 'row', padding: 10 }}>
                            <Text>
                                Total income : {detail.totalIncome} {'\n'}
                                Total agen : {detail.totalReport} {'\n'}
                            </Text>
                            <Body>
                                <Text>Total Item sold: {'\n'}</Text>
                                <FlatList
                                    data={detail.listItem}
                                    keyExtractor= {(item) => item._id}
                                    renderItem={
                                        ({ item, index }) => (
                                            <Text style={{ justifyContent: 'flex-end' }}>
                                                {item.name}  = {item.totalSelling} pcs
                                                {/* {JSON.stringify(item)} */}
                                            </Text>
                                        )
                                    }
                                />
                            </Body>
                        </Body>
                    </CardItem>
                </Card>
                <View style={styles.container}>
                    <StatusBar
                        hidden={true}
                    />
                    <Text style={styles.title}>Basic</Text>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={sliceColor}
                    />
                    <Text style={styles.title}>Doughnut</Text>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={sliceColor}
                        doughnut={true}
                        coverRadius={0.45}
                        coverFill={'#FFF'}
                    />
                </View>
                <List
                    dataArray={detail.result}
                    renderRow={(item) =>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={{ uri : item.sellingId.userId.propicURL}} />
                            </Left>
                            <Body>
                                <Text style={{}}>{item.sellingId.userId.firstName} {item.sellingId.userId.lastName}</Text>
                                <Text>List item sold:</Text>
                                <FlatList
                                    data={item.sellingId.selling}
                                    keyExtractor= {(item) => item._id}
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
    }
  });