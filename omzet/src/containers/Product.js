import React, { Component, Fragment } from 'react'
import { Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { Icon, Container, Content, List, ListItem, Text, Spinner } from 'native-base'
import { connect } from 'react-redux'
import Octicons from 'react-native-vector-icons/Octicons'
import firebase from 'react-native-firebase'

import getProduct from '../store/product/actions'

const logout = (navigation) => {
  AsyncStorage.removeItem('user')
    .then(() => {
      firebase.auth().signOut()
        .then(() => {
          navigation.navigate('Login')
        })
        .catch(err => {
          navigation.navigate('Login')
        })
    })
    .catch(err => {
      console.log(err)
    })
}

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Product',
      headerStyle: {
        backgroundColor: '#58B9FE',
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
        <Fragment>
          <TouchableOpacity onPress={() => navigation.navigate('AddProduct', { navigate: navigation.navigate })}>
            <Icon style={{ color: 'white', marginRight: 15 }} name='add' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            logout(navigation)
          }}>
            <Octicons name='sign-out' size={25} style={{ color: 'white', marginRight: 15 }} />
          </TouchableOpacity>
        </Fragment>
      )
    }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.props.isLoaded ? (
              <List>
                {
                  this.props.products.map(item => {
                    return (
                      <ListItem key={item._id}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FormProduct', { navigate: this.props.navigation.navigate, product: item })}>
                          <Text>{item.itemName}</Text>
                        </TouchableOpacity>
                      </ListItem>
                    )
                  })
                }
              </List>
            ) : <Spinner color='#58B9FE' />
          }
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    isLoaded: state.product.isLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)