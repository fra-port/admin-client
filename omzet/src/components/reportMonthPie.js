import React, { Component } from 'react'
import { FlatList, StyleSheet, ScrollView } from 'react-native'
import { View, Card, Text, Body, CardItem } from 'native-base';
import PieChart from 'react-native-pie-chart';

export default class ReportMonthPie extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Detail Report Monthly',
        headerStyle: {
            backgroundColor: '#58B9FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            width: '90%',
        }
    });
    
    render() {
        const detail = this.props.navigation.state.params.detail.data.obj
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
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <Card>
                        <CardItem header bordered>
                            <Body>
                                <Text style={{ fontSize: 40 }}>Result </Text>
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
                    <View>
                        {
                            detail.incomeMonth > 0 &&
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
                            </View>
                        }

                    </View>
                </View>
            </ScrollView>
        )
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
        flexDirection: "row",
        flexWrap: 'wrap'
    }
});
