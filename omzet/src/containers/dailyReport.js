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

    static navigationOptions = ({ navigation }) => ({
        title: 'Detail Report',
        headerStyle: {
            backgroundColor: '#58B9FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            width: '90%',
        }
    });

    render() {
        const propsDetail = this.props.navigation.state.params.detail

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