import React, { Component } from "react";
import { View, FlatList } from 'react-native'
import { List, ListItem, Thumbnail, Card, CardItem, Body, Text, Left, Right, Button } from "native-base";

export default class ReportThumbnail extends Component {

    render() {
        const detail = this.props.detail
        
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
                                <Text style={{}}>{item.sellingId.userId.firstName} {item.sellingId.userId.lastName}</Text>
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
            </View>
        );
    }
}