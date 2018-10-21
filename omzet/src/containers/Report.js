import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, Image, AsyncStorage } from 'react-native'
import { Container, Header, Content, Icon, DatePicker, Text } from 'native-base'
import CardReport from '../components/reportCard'
import { connect } from 'react-redux'
import { getAllReports } from '../store/reports/reports.action'
import Octicons from 'react-native-vector-icons/Octicons'
import firebase from 'react-native-firebase'
import ReportMonth from '../components/reportMonth'

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain'
  },

  rowStyle: {
    flex: 1,
    flexDirection: "row"
  }
});

const logout = (navigation) => {
  AsyncStorage.removeItem('user')
    .then(() => {
      firebase.auth().signOut()
        .then(() => {
          navigation.navigate('Login')
        })
        .catch(err => {
          navigation.navigate('Login')
        })
    })
    .catch(err => {
      console.log(err)
    })
}

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = { chosenDate: new Date() }
    this.setDate = this.setDate.bind(this)
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Report',
    headerStyle: {
      backgroundColor: '#58B9FE',
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
      <TouchableOpacity onPress={() => {
        logout(navigation)
      }}>
        <Octicons name='sign-out' size={25} style={{ color: 'white', marginRight: 15 }} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <Container>
        <Content padder>
          <View style={styles.rowStyle}>
            <Octicons name='calendar' size={25} style={{marginLeft: 10, marginTop: 4 }} />
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#0f0505" }}
              onDateChange={this.setDate}
            />
          </View>
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
          <CardReport navigation={this.props.navigation} date={this.state.chosenDate.toLocaleDateString()}></CardReport>
          <ReportMonth navigation={this.props.navigation}/>
        </Content>
      </Container>
    )
  }
}


export default (Report)