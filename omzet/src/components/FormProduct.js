import React, { Component } from 'react'
import { Image } from 'react-native'
import { Icon, Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'

export default class FormProduct extends Component {
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

  state = {
    itemName: '',
    price: '',
    id: ''
  }

  componentDidMount() {
    const props = this.props.navigation.state.params

    this.setState({
      itemName: props.product.itemName,
      price: props.product.price.toString(),
      id: props.product._id
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Item Name</Label>
              <Input onChangeText={(itemName) => this.setState({ itemName })} value={ this.state.itemName }/>
            </Item>
            <Item floatingLabel last>
              <Label>Price</Label>
              <Input onChangeText={(price) => this.setState({ price })} value={ this.state.price }/>
            </Item>
          </Form>

          <Container style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
            <Button primary style={{ marginRight: 20 }}><Text> Update </Text></Button>
            <Button danger><Text> Delete </Text></Button>
          </Container>
        </Content>
      </Container>
    )
  }
}
