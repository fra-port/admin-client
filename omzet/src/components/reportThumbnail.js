import React, { Component } from "react";
import { View, FlatList } from 'react-native'
import { Accordion, List, ListItem, Thumbnail, Card, CardItem, Body, Text, Left, Right, Button } from "native-base";
const dataArray = [
    { title: "Agent A", content: "Lorem ipsum dolor sit amet" },
    { title: "Agent B", content: "Lorem ipsum dolor sit amet" },
    { title: "Agent C", content: "Lorem ipsum dolor sit amet" }
];
export default class ReportThumbnail extends Component {

    _renderHeader(title, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
            >
                <Text style={{ fontWeight: "600" }}>
                    {" "}{title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(content) {
        return (
            <View>
                {
                    this.props.detail.result.map((item, index) => {
                        return (
                            <Text key={index}>{
                                content = 'aaaaaa'
                            }</Text>
                        )
                    })
                }
            </View>
        );
    }

    render() {
        const detail = this.props.detail
        const dataAgen = detail.result

        // {JSON.stringify(detail)}
        return (
            <View>
                <Card>
                    <CardItem header bordered>
                        <Body>
                            <Text style={{ fontSize: 50 }}>Today Result </Text>
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

                <List
                    dataArray={detail.result}
                    renderRow={(item) =>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../assets/user.png')} />
                            </Left>
                            <Body>
                                <Text>Agent name: {item.sellingId.userId.firstName} {item.sellingId.userId.lastName}</Text>
                                <Text>List item sold:</Text>
                                <FlatList
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


                {/* <Accordion
                    dataArray={detail.result}
                    headerStyle={{ backgroundColor: "#5C6C9C" }}
                    contentStyle={this._renderContent}
                /> */}

                {/* <FlatList
                    data={detail.result}
                    renderItem={
                        ({ item }) => {
                            let dataArr = { title: item.total, content: item.total }
                            return (
                                <Accordion
                                    dataArray={dataArr}
                                    headerStyle={{ backgroundColor: "#5C6C9C" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                            )
                        }
                    }
                /> */}

            </View>
        );
    }
}