import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Container, Content, Icon } from 'native-base'
import ThumbnailReport from '../components/reportThumbnail'

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        marginLeft: 15,
        resizeMode: 'contain'
    }
});

export class dailyReport extends Component {

    // static navigationOptions = {
    //     title: 'Detail Report',
    //     headerStyle: {
    //         backgroundColor: '#87cefa'
    //     },
    //     headerTitleStyle: {
    //         width: '100%',
    //     },
    //     headerTintColor: '#000000'
    // }

    static navigationOptions = ({ navigation }) => ({
        title: 'Detail Report',
        headerStyle: {
            backgroundColor: '#5C6C9C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            width: '90%',
        },
        headerRight: (
            <Icon style={{ color: "white", marginRight: 20 }} name='more' />
        )
    });

    render() {
        const propsDetail = this.props.navigation.state.params.detail
        // const propsItem = this.props.navigation.state.params.item
        // const propsIncome = this.props.navigation.state.params.income

        return (
            <Container>
                <Content padder>
                    <ThumbnailReport detail={propsDetail} ></ThumbnailReport>
                </Content>
            </Container>
        )
    }
}

export default dailyReport