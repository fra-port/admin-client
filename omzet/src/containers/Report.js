import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Container, Header, Content } from 'native-base'
import HeaderReport from '../components/reportHeader'
import CardReport from '../components/reportCard'

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
    title: 'List Report',
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
          <CardReport navigation={this.props.navigation}></CardReport>
        </Content>
      </Container>
    )
  }
}


export default (Report)