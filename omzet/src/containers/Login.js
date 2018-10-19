import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Form, Item, Input, Label } from 'native-base';
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
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 80}}>
          <View style={{
           marginHorizontal: -20
          }}>
            <Image
              style={{ height: 180, width: 250, marginBottom: 10 }}
              resizeMode="contain"
              source={require('../omzet-logo.png')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }} >WELCOME TO THE OMZET</Text>
          <Text style={{ color: "white"}} >Apps for daily omzet reporting</Text>
          </View>
          <View style={{ width: 200 }}>
            <Form>
              <Item floatingLabel>
                <Label style={{ color: 'white' }}>Email</Label>
                <Input style={{ color: 'white' }} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: 'white' }}>Password</Label>
                <Input style={{ color: 'white' }} />
              </Item>
            </Form>
          </View>
          <TouchableOpacity onPress={this.handleLogin} style={styles.touchButton}>
            <Text style={{ textAlign: 'center', paddingVertical: 10, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58B9FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: 200,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 3
  },
  touchButton: {
    borderRadius: 3,
    width: 200,
    height: 40,
    backgroundColor: 'white',
    marginTop: 10
  }
})


export default (Login)