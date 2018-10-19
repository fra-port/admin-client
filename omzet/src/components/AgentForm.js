import React, { Component } from 'react';
import { Thumbnail, Button, Form, Item, Input  } from 'native-base';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import axios from 'axios'
const serverURL = "http://35.240.197.42"

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
      propicURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
      formType : "Add",
      srcImg: '',
      fileName: '',
      type: '',
      uri: '',
      loading: false,
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
        propicURL: this.props.data.propicURL,
        formType : "Edit"
      })
    }
  }

  selectImg = () => {
    const options = {
      title: 'Options',
      takePhotoButtonTitle: 'Camera',
      chooseFromLibraryButtonTitle: 'Gallery',
    }    
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker")
      } else if (response.error) {
        console.log('Image picker error: ', response.error)
      } else {
        let source = { uri: response.uri }
        console.log(response.fileName)
        this.setState({
          srcImg: source,
          // propicURL: source,
          filename: response.fileName,
          type: response.type,
          uri: response.uri
        })
      }
    })
  }

  uploadImage = async () => {
    try {
      let formData = new FormData()
      let type = this.state.type
      formData.append('image', { uri: this.state.uri, name: this.state.filename, type })
      axios.post(`${serverURL}/image`, formData , {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
      })
      .then (({data})=> {
        this.setState({
          propicURL: data.imageURL
        })
      })
      .catch (err => {
        Alert.alert(
          'Alert',
          `${err.message}`,
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
      }) 
    } catch(err) {
      Alert.alert(
        'Alert',
        `${err.message}`,
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    }
  }

  handleClick = async () => {
    await this.uploadImage()
    this.props.formMethod({
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      idTelegram : this.state.idTelegram,
      email : this.state.email,
      address : this.state.address,
      phoneNumber : this.state.phoneNumber,
      propicURL : this.state.propicURL
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={{alignItems: 'center', border: '5 solid'}}>
          <TouchableOpacity
            onPress={this.selectImg}
          >
            <Thumbnail large source={{ uri: this.state.propicURL }} />
          </TouchableOpacity>
          <Text style={{fontSize: 10}}>click image to change propic</Text>
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
            onPress={() => this.handleClick()}
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