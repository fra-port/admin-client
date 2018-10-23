import React, { Component, Fragment } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native'
import { Icon } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons'
import firebase from 'react-native-firebase'
import axios from 'axios'

const logout = (navigation) => {
  AsyncStorage.removeItem('user')
    .then(() => {
      firebase.auth().signOut()
        .then(() => {
          let fcmToken = AsyncStorage.getItem('fcmToken')
          axios.post(`${serverURL}/fcm/remove`, {token : fcmToken})
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

class AgentHeaderRight extends Component {

  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AgentAdd')
          }}>
          <Icon style={{ color: "white", marginRight: 20 }} name='md-person-add' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          logout(this.props.navigation)
        }}>
          <Octicons name='sign-out' size={25} style={{ color: 'white', marginRight: 15 }} />
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default AgentHeaderRight;