import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Header, Content, Icon } from 'native-base'
import CardReport from '../components/reportCard'

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain'
  }
});

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // static navigationOptions = {
  //   title: 'List Report',
  //   headerStyle: {
  //     backgroundColor: '#87cefa'
  //   },
  //   headerTitleStyle: {
  //     width: '100%',
  //   },
  //   headerTintColor: '#000000'
  // }

  static navigationOptions = ({ navigation }) => ({
    title: 'Report',
    headerStyle: {
      backgroundColor: '#5C6C9C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      width: '90%',
    },
    headerLeft: (
      <Image
        source={require('../assets/omzet-logo.png')}
        style={styles.image}
      />
    ),
    headerRight: (
      <Icon style={{ color: "white", marginRight: 20 }} name='more' />
    )
  });

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