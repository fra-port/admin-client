import React, { Component } from "react";
import { View } from 'react-native'
import { Accordion, List, ListItem, Thumbnail, Card, CardItem, Body, Text } from "native-base";
const dataArray = [
    { title: "Agent A", content: "Lorem ipsum dolor sit amet" },
    { title: "Agent B", content: "Lorem ipsum dolor sit amet" },
    { title: "Agent C", content: "Lorem ipsum dolor sit amet" }
];
export default class ReportThumbnail extends Component {

    render() {
        return (
            <View>
                <Card>
                    <CardItem header bordered>
                        <Body>
                            <Text style={{ fontSize: 50}}>Day 1 Result</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body style={{ flexDirection: 'row', padding: 10 }}>
                            <Body>
                                <Text>
                                    Total income : 50.000 {'\n'}
                                    Total agen : 4 {'\n'}
                                    Total Item Sold: 17 {'\n'}
                                </Text>
                            </Body>
                            <Body>
                                <Text style={{ justifyContent: 'flex-end' }}>
                                    List Item sold: {'\n'}
                                    paha  = 5   pcs{'\n'}
                                    dada  = 10  pcs{'\n'}
                                    sayap = 18  pcs{'\n'}
                                </Text>
                            </Body>
                        </Body>
                    </CardItem>
                </Card>

                <Accordion
                    dataArray={dataArray}
                    headerStyle={{ backgroundColor: "#b7daf8" }}
                    contentStyle={{ backgroundColor: "#ddecf8" }}
                >
                </Accordion>

            </View>
        );
    }
}