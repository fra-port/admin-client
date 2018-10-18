import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Container, Content} from 'native-base'
import ThumbnailReport from '../components/reportThumbnail'

export class dailyReport extends Component {

    static navigationOptions = {
        title: 'Detail Report',
        headerStyle: {
            backgroundColor: '#87cefa'
        },
        headerTitleStyle: {
            width: '100%',
        },
        headerTintColor: '#000000'
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <ThumbnailReport></ThumbnailReport>
                </Content>
            </Container>
        )
    }
}

export default dailyReport