import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import { Icon, Container, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base'
import { connect } from 'react-redux'
import axios from 'axios'

import getProduct from '../store/product/actions'

class FormProduct extends Component {
  static navigationOptions = {
    title: 'Product Detail',
    headerStyle: {
      backgroundColor: '#58B9FE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      width: '90%',
    }
  }

  state = {
    itemName: '',
    price: '',
    id: '',
    loading: false
  }

  componentDidMount() {
    const props = this.props.navigation.state.params

    this.setState({
      itemName: props.product.itemName,
      price: props.product.price.toString(),
      id: props.product._id
    })
  }

  updateProduct = () => {
    this.setState({loading: true}, () => {
      axios.put(`http://35.240.197.42/items/${this.state.id}`, { itemName: this.state.itemName, price: Number(this.state.price) })
        .then(() => {
          this.setState({loading: false}, () => {
            Alert.alert(
              'Info',
              `Successfully update product`,
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
          this.setState({loading: false}, () => {
            Alert.alert(
              'Alert',
              `Unable update product`,
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
    })
  }

  deleteProduct = () => {
    this.setState({loading: true}, () => {
      axios.delete(`http://35.240.197.42/items/${this.state.id}`)
        .then(() => {
          this.setState({loading: false}, () => {
            Alert.alert(
              'Info',
              `Successfully delete product`,
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
          this.setState({loading: false}, () => {
            Alert.alert(
              'Alert',
              `Unable delete product`,
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
            <Button success style={{ marginRight: 20 }} onPress={ () => this.updateProduct() }><Text> Update </Text></Button>
            <Button danger onPress={ () => this.deleteProduct() }><Text> Delete </Text></Button>
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

export default connect(null, mapDispatchToProps)(FormProduct)
