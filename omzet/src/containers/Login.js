import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Form, Item, Input, Label } from 'native-base';
import firebase from 'react-native-firebase'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = () => {
    if (this.state.email === '' || this.state.password === '') {
      alert('email/password must be filled')
    } else {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(data => {
          AsyncStorage.setItem('user', JSON.stringify(data.user))
          this.props.navigation.navigate('Home')
        })
        .catch(err => {
          let errCode = err.code
          let errMessage = err.message

          if (errCode === 'auth/invalid-email') {
            alert('Wrong email format!')
          } else if (errCode === 'auth/user-not-found') {
            alert('User not found! Wrong email address or password!')
          } else {
            alert(errMessage)
          }
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 80 }}>
          <View style={{
            marginHorizontal: -20
          }}>
            <Image
              style={{ height: 180, width: 250, marginBottom: 10 }}
              resizeMode="contain"
              source={require('../assets/omzet-logo.png')}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }} >WELCOME TO THE OMZET</Text>
            <Text style={{ color: "white" }} >Apps for daily omzet reporting test</Text>
          </View>
          <View style={{ width: 200 }}>
            <Form>
              <Item floatingLabel>
                <Label style={{ color: 'white' }}>Email</Label>
                <Input onChangeText={(email) => this.setState({ email })} style={{ color: 'white' }} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: 'white' }}>Password</Label>
                <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} style={{ color: 'white' }} />
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