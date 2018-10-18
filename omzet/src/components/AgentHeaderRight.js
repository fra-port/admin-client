import React, { Component, Fragment } from 'react';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';

class AgentHeaderRight extends Component {

  addAgent(){
    this.props.navigation.navigate('AddAgent')
  }

  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() => {
            this.addAgent()
          }}>
          <Icon style={{color: "white", marginRight: 20}} name='md-person-add' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={{color: "white", marginRight: 20}} name='more' />
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default AgentHeaderRight;