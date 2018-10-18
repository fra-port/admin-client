import React, { Component } from 'react';
import { Container, Icon } from 'native-base';

class Agent extends Component {
  static navigationOptions = {
    title: 'Agent',
    headerStyle: {
      backgroundColor: '#5C6C9C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1
    }
  };

  render() {
    return (
      <Container>
        <Icon name='more' />
      </Container>
    );
  }
}

export default Agent