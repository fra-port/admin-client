import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import {Image, StyleSheet} from 'react-native'
import AgentHeaderRight from '../components/AgentHeaderRight'


const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain'
  }
});

class Agent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Agent',
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
        style={styles.image}
      />
    ),
    headerRight: (
      <AgentHeaderRight navigation={navigation}/>
    )
  });

  render() {
    return (
      <Container>
        
      </Container>
    );
  }
}



export default Agent