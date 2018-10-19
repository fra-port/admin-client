import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import {Alert} from 'react-native'
import AgentForm from '../components/AgentForm'
import axios from 'axios'
const serverURL = "http://35.240.197.42"
import {getAllAgent} from '../store/fetchAgent/action'
import { connect } from 'react-redux'

const mapDistpatchToProps = dispatch => {
  return {
    getAllAgent: () => {
      dispatch(getAllAgent())
    }
  }
}

class AgentEdit extends Component {
  static navigationOptions = {
    title: 'Edit Agent',
    headerStyle: {
      backgroundColor: '#58B9FE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  editAgent = (payload) => {
    axios.put(`${serverURL}/users/${this.props.navigation.getParam('agent')._id}`, payload)
      .then(({data}) => {
        Alert.alert(
          'Info',
          `${data.msg}`,
          [
            {text: 'OK', onPress: () => {
              this.props.getAllAgent()
              this.props.navigation.navigate('HomeAgent')
            }},
          ],
          { cancelable: false }
        )
      })
      .catch(err => {
        Alert.alert(
          'Alert',
          `${err.message}`,
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('HomeAgent')},
          ],
          { cancelable: false }
        )
      })
  }

  render() {
    return ( 
      <Container >
        <Content padder >
          <AgentForm data={this.props.navigation.getParam('agent')} formType="Edit" formMethod = {this.editAgent}/>
        </Content>
      </Container>
    );
  }
}

export default connect(null, mapDistpatchToProps) (AgentEdit)