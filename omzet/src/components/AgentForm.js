import React, { Component } from 'react';
import { Thumbnail, Button, Form, Item, Input, Spinner } from 'native-base';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import axios from 'axios'
const serverURL = "http://35.240.197.42"

class AgentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      idTelegram: '',
      email: '',
      address: '',
      phoneNumber: '',
      propicURL: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
      formType: "Add",
      srcImg: '',
      fileName: '',
      type: '',
      uri: '',
      fetchImg: false,
      loading: false,
    }
  }

  componentDidMount = () => {
    if (this.props.formType === 'Edit') {
      this.setState({
        firstName: this.props.data.firstName,
        lastName: this.props.data.lastName,
        idTelegram: this.props.data.idTelegram,
        email: this.props.data.email,
        address: this.props.data.address,
        phoneNumber: this.props.data.phoneNumber,
        propicURL: this.props.data.propicURL,
        formType: "Edit"
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
        this.setState({
          srcImg: source,
          fetchImg: true,
          propicURL: response.uri,
          filename: response.fileName,
          type: response.type,
          uri: response.uri
        })
      }
    })
  }

  uploadImage = () => {
    let formData = new FormData()
    let type = this.state.type
    formData.append('image', { uri: this.state.uri, name: this.state.filename, type })
    // axios.post(`${serverURL}/image`, formData , {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //     }
    // })
    axios.post('https://blogserver.sumarsanaadi.com/articles/img/uploadimg', formData, {
      headers: {
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYzliYTJmMzM1YTI0M2NhY2UyYzY2ZCIsInVzZXJOYW1lIjoibWFkZWJpZW4iLCJuYW1lIjoiTWFkZSBCaWVuIiwiZW1haWwiOiJpZV9kYWxsb2Vua0B5YWhvby5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1Mzk5NDcwNTZ9.MhkISSnQie9MQ99noTZ9WaUK7yMrbGIjek7XBWkMgWk',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(({ data }) => {
        console.log(data.imageURL)
        this.setState({
          propicURL: data.imageURL
        }, () => this.props.formMethod({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          idTelegram: this.state.idTelegram,
          email: this.state.email,
          address: this.state.address,
          phoneNumber: this.state.phoneNumber,
          propicURL: this.state.propicURL
        }))
      })
      .catch(err => {
        Alert.alert(
          'Alert',
          `${err.message}`,
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        )
      })

  }

  handleClick = () => {
    this.setState({loading: true}, () => {
      if (this.state.fetchImg) {
        this.uploadImage()
      } else if (this.state.address === '' || this.state.email === '' || this.state.firstName === '' || this.state.idTelegram === '' || this.state.lastName === '' || this.state.phoneNumber === '') {
        alert('all data must be filled')
        this.setState({loading: false})
      } else {
        this.props.formMethod({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          idTelegram: this.state.idTelegram,
          email: this.state.email,
          address: this.state.address,
          phoneNumber: this.state.phoneNumber,
          propicURL: this.state.propicURL
        })
        this.setState({loading: false})
      }
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={{ alignItems: 'center', border: '5 solid' }}>
          <TouchableOpacity
            onPress={this.selectImg}
          >
            <Thumbnail large source={{ uri: this.state.propicURL }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 10 }}>click image to change propic</Text>
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <Form>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
                placeholder='First name'
                name="firstName"
              />
            </Item>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                placeholder='Last name'
                name="lastName"
              />
            </Item>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={idTelegram => this.setState({ idTelegram })}
                value={this.state.idTelegram}
                placeholder='Telegram ID'
                name="idTelegram"
              />
            </Item>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                placeholder='Email'
                name="email"
              />
            </Item>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={address => this.setState({ address })}
                value={this.state.address}
                placeholder='Address'
                name="address"
              />
            </Item>
            <Item>
              <Input
                style={{ fontSize: 15 }}
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
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
            style={{ width: 80, justifyContent: "center" }}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>{this.state.formType}</Text>
          </Button>
        </View>
        {this.state.loading && <Spinner color="#58B9FE"/>}
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