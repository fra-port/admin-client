import React, { Component } from 'react';
import { Container, Content, Thumbnail, Icon, Button } from 'native-base';
import { Text, View, StyleSheet, ScrollView , Alert} from 'react-native'
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

class AgentDetail extends Component {
  static navigationOptions = {
    title: 'Agent Detail',
    headerStyle: {
      backgroundColor: '#58B9FE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  handleEdit = () => {
    this.props.navigation.navigate('AgentEdit', {agent : this.props.navigation.getParam('agent')})
  }

  handleDelete = () => {
    axios.delete(`${serverURL}/users/${this.props.navigation.getParam('agent')._id}`)
      .then(({data}) => {
        Alert.alert(
          'Info',
          `${data.message}`,
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
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Thumbnail large source={{ uri: this.props.navigation.getParam('agent').propicURL}} />
            </View>
            <View style={{marginTop: 10, marginLeft: 20}}>
              <Text style={{fontSize: 15, marginBottom: 5}}>First name : {this.props.navigation.getParam('agent').firstName}</Text>
              <Text style={{fontSize: 15, marginBottom: 5}}>Last name : {this.props.navigation.getParam('agent').lastName}</Text>
              <Text style={{fontSize: 15, marginBottom: 5}}>Telegram ID : {this.props.navigation.getParam('agent').idTelegram}</Text>
              <Text style={{fontSize: 15, marginBottom: 5}}>Email : {this.props.navigation.getParam('agent').email}</Text>
              <Text style={{fontSize: 15, marginBottom: 5}}>Address : {this.props.navigation.getParam('agent').address}</Text>
              <Text style={{fontSize: 15, marginBottom: 5}}>Phone number : {this.props.navigation.getParam('agent').phoneNumber}</Text>
            </View>
            <View style={styles.Row}>
              <Button success onPress={() => this.handleEdit()} style={{ width: 80, justifyContent: "center"}}>
                  <Text style={{ textAlign: 'center', color:'white'}}>Edit</Text>
              </Button>
              <Button danger onPress={() => this.handleDelete()} style={{width: 80, justifyContent: "center"}}>
                  <Text style={{ textAlign: 'center', color:'white'}}>Delete</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    padding: 5
  },
});

export default connect(null, mapDistpatchToProps) (AgentDetail)