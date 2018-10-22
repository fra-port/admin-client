import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import { Icon, Container, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base'
import axios from 'axios'
import { connect } from 'react-redux'

import getProduct from '../store/product/actions'

class AddProduct extends Component {
  constructor (props) {
    super (props)
    this.state = {
      loading : false
    }
  }
  static navigationOptions = {
    title: 'Add Product',
    headerStyle: {
      backgroundColor: '#58B9FE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      width: '90%',
    },
    headerRight: (
      <Icon style={{ color: "white", marginRight: 20 }} name='more' />
    )
  }

  state = {
    itemName: '',
    price: ''
  }

  addProduct = () => () => {
    if (this.state.itemName === '' || this.state.price === '') {
      alert('all data must be filled')
    } else {
      this.setState({loading : true} , () => {
        axios.post('http://35.240.197.42/items', { itemName: this.state.itemName, price: Number(this.state.price) })
        .then(() => {
          this.setState({loading: false}, () => {
            Alert.alert(
              'Info',
              `Successfully add product`,
              [
                {
                  text: 'OK', onPress: () => {
                    this.props.getProducts()
                    this.props.navigation.state.params.navigate('Product')
                  }
                },
              ],
              { cancelable: false }
            )
          })
        })
        .catch(err => {
          this.setState({loading: false})
          console.log(err)
        })
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Item Name</Label>
              <Input onChangeText={(itemName) => this.setState({ itemName })} />
            </Item>
            <Item floatingLabel last>
              <Label>Price</Label>
              <Input onChangeText={(price) => this.setState({ price })} />
            </Item>
          </Form>

          <Container style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
            <Button primary style={{ marginRight: 20 }} onPress={this.addProduct()}><Text> Add </Text></Button>
          </Container>
          {this.state.loading && <Spinner color="#58B9FE"/>}
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
