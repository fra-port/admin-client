import React, { Component } from 'react';
import { Thumbnail, Button, Form, Item, Input, Label  } from 'native-base';
import { Text, View, StyleSheet, ScrollView } from 'react-native'

class AgentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName : '',
      lastName : '',
      idTelegram : '',
      email : '',
      address : '',
      phoneNumber : '',
      formType : "Add"
    }
  }

  componentDidMount = () => {
    if (this.props.formType === 'Edit') {
      this.setState({
        firstName : this.props.data.firstName,
        lastName : this.props.data.lastName,
        idTelegram : this.props.data.idTelegram,
        email : this.props.data.email,
        address : this.props.data.address,
        phoneNumber : this.props.data.phoneNumber,
        formType : "Edit"
      })
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Thumbnail large source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' }} />
        </View>
        <View style={{marginTop: 10, marginHorizontal: 20}}>
          <Form>
            <Item>
              <Input 
                style={{fontSize: 15}}
                onChangeText={firstName => this.setState({firstName})}
                value={this.state.firstName}
                placeholder='First name'
                name="firstName"
              />
            </Item>
            <Item>
              <Input 
                style={{fontSize: 15}}
                onChangeText={lastName => this.setState({lastName})}
                value={this.state.lastName}
                placeholder='Last name'
                name="lastName"
              />
            </Item>
            <Item>
              <Input
                style={{fontSize: 15}}
                onChangeText={idTelegram => this.setState({idTelegram})}
                value={this.state.idTelegram}
                placeholder='Telegram ID'
                name="idTelegram"
              />
            </Item>
            <Item>
              <Input
                style={{fontSize: 15}}
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                placeholder='Email'
                name="email"
              />
            </Item>
            <Item>
              <Input
                style={{fontSize: 15}}
                onChangeText={address => this.setState({address})}
                value={this.state.address}
                placeholder='Address'
                name="address"
              />
            </Item>
            <Item>
              <Input
                style={{fontSize: 15}}
                onChangeText={phoneNumber => this.setState({phoneNumber})}
                value={this.state.phoneNumber}
                placeholder='Phone number'
                name="phoneNumber"
              />
            </Item>
          </Form>
        </View>
        <View style={styles.row}>
          <Button 
            success
            onPress={() => this.props.formMethod({
              firstName : this.state.firstName,
              lastName : this.state.lastName,
              idTelegram : this.state.idTelegram,
              email : this.state.email,
              address : this.state.address,
              phoneNumber : this.state.phoneNumber,
            })}
            style={{ width: 80, justifyContent: "center"}}
          >
              <Text style={{ textAlign: 'center', color:'white'}}>{this.state.formType}</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    padding: 5
  },
});

export default AgentForm