import React, {Component} from 'react'
import {  Image } from 'react-native'
import { Icon, Container, Header, Content, List, ListItem, Text } from 'native-base'

class Product extends Component {
  static navigationOptions = {
    title: 'Product',
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
        style={{
          width: 40,
          height: 40,
          marginLeft: 15,
          resizeMode: 'contain'
        }}
      />
    ),
    headerRight: (
      <Icon style={{color: "white", marginRight: 20}} name='more' />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const items = [
      'Sayap',
      'Paha Bawah',
      'Paha Atas',
      'Dada'
    ]
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}

export default (Product)