import React, { Component } from "react";
import { TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardReport extends Component {
    render() {
        return (
            <Card>
                <CardItem header bordered>
                    <Text>Day 1</Text>
                </CardItem>
                <CardItem bordered>
                    <Body style={{flexDirection:'row'}}>
                        <Text style={{paddingRight:10}}>
                            Total income : 50.000 {'\n'}
                            Total agen : 4 {'\n'}
                            Total Item Sold: 17 {'\n'} 
                        </Text>
                        <Text style={{justifyContent:'center', alignItems:'center'}}>
                            Total income : 50.0000
                        </Text>
                    </Body>
                </CardItem>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DailyReport')}>
                    <CardItem footer bordered>
                        <Text>Detail..</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}