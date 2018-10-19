import React, { Component } from 'react';
import { TouchableOpacity, View, Fragment } from 'react-native'
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';

class ListAgent extends Component {
  render() {
    return (
      <View>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' }} />
            </Left>
              <TouchableOpacity 
                style={{width : '100%'}}
                onPress={() => this.props.navigation.navigate('AgentDetail', {agent: this.props.agent})}
              >
            <Body>
                <Text>{this.props.agent.firstName} {this.props.agent.lastName}</Text>
                <Text note>{this.props.agent.address}</Text>
            </Body>
              </TouchableOpacity>
          </ListItem>
        </View>
    );
  }
}

export default ListAgent