import React, { Component } from 'react'
import { Image } from 'react-native'
import { Icon, Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import axios from 'axios'
import { connect } from 'react-redux'

import getProduct from '../store/product/actions'

class AddProduct extends Component {
  static navigationOptions = {
    title: 'Add Product',
    headerStyle: {
      backgroundColor: '#5C6C9C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      width: '90%',
    },
    headerRight: (
      <Icon style={{color: "white", marginRight: 20}} name='more' />
    )
  }

  state = {
    itemName: '',
    price: ''
  }

  addProduct = () => () => {
    axios.post('http://35.240.197.42/items', { itemName: this.state.itemName, price: Number(this.state.price) })
      .then(() => {
        this.props.getProducts()
        this.props.navigation.state.params.navigate('Product')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Item Name</Label>
              <Input onChangeText={(itemName) => this.setState({ itemName })}/>
            </Item>
            <Item floatingLabel last>
              <Label>Price</Label>
              <Input onChangeText={(price) => this.setState({ price })}/>
            </Item>
          </Form>

          <Container style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
            <Button primary style={{ marginRight: 20 }} onPress={ this.addProduct() }><Text> Add </Text></Button>
          </Container>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProduct())
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
