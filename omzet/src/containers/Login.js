import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  handleLogin = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.handleLogin}>
          <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold' }}>Go</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default (Login)