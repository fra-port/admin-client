import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons'

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
          this.props.navigation.navigate('Login')
        }}>
          <Octicons name='sign-out' size={25} style={{ color: 'white', marginRight: 15 }} />
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default AgentHeaderRight;