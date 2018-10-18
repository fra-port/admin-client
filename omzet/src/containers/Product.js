import React, {Component, Fragment} from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Icon, Container, Content, List, ListItem, Text, Spinner } from 'native-base'
import { connect } from 'react-redux'

import getProduct from '../store/product/actions'

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
        <Fragment>
          <TouchableOpacity onPress={() => navigation.navigate('AddProduct', { navigate: navigation.navigate })}>
            <Icon style={{ color: 'white', marginRight: 20 }} name='add'/>
          </TouchableOpacity>
  
          <Icon style={{color: "white", marginRight: 20}} name='more' />
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
                      <ListItem key={ item._id }>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FormProduct', { navigate: this.props.navigation.navigate, product: item })}>
                          <Text>{ item.itemName }</Text>
                        </TouchableOpacity>
                      </ListItem>
                    )
                  })
                }
              </List>
            ) : <Spinner color='blue' />
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